import { MaskInputOptions, SlimDOMOptions } from 'rrweb-snapshot';
import { record } from 'rrweb';
import { listenerHandler, eventWithTime } from 'rrweb/typings/types';
import { Integration, EventProcessor, Hub } from '@sentry/types';

declare class CaptureMetrics {
    enabled: boolean;
    metrics: Record<string, number>;
    constructor(enabled: boolean);
    incr(key: string, by?: number): void;
    decr(key: string): void;
}

declare class RequestQueueScaffold {
    isPolling: boolean;
    _event_queue: any[];
    _empty_queue_count: number;
    _poller: number | undefined;
    _pollInterval: number;
    constructor(pollInterval?: number);
    setPollInterval(interval: number): void;
    poll(): void;
    unload(): void;
    getTime(): number;
}

declare class RetryQueue extends RequestQueueScaffold {
    captureMetrics: CaptureMetrics;
    queue: RetryQueueElement[];
    isPolling: boolean;
    areWeOnline: boolean;
    onXHRError: (failedRequest: XMLHttpRequest) => void;
    constructor(captureMetrics: CaptureMetrics, onXHRError: (failedRequest: XMLHttpRequest) => void);
    enqueue(requestData: QueuedRequestData): void;
    poll(): void;
    flush(): void;
    unload(): void;
    _executeXhrRequest({ url, data, options, headers, callback, retriesPerformedSoFar }: QueuedRequestData): void;
    _handleWeAreNowOnline(): void;
}

declare type Property = any;
declare type Properties = Record<string, Property>;
interface CaptureResult {
    event: string;
    properties: Properties;
    $set?: Properties;
    timestamp?: Date;
}
declare type CaptureCallback = (response: any, data: any) => void;
interface PostHogConfig {
    api_host: string;
    api_method: string;
    api_transport: string;
    token: string;
    autocapture: boolean;
    rageclick: boolean;
    cross_subdomain_cookie: boolean;
    persistence: 'localStorage' | 'cookie' | 'memory' | 'localStorage+cookie';
    persistence_name: string;
    cookie_name: string;
    loaded: (posthog_instance: PostHog) => void;
    store_google: boolean;
    save_referrer: boolean;
    test: boolean;
    verbose: boolean;
    img: boolean;
    capture_pageview: boolean;
    debug: boolean;
    cookie_expiration: number;
    upgrade: boolean;
    disable_session_recording: boolean;
    disable_persistence: boolean;
    disable_cookie: boolean;
    enable_recording_console_log: boolean;
    secure_cookie: boolean;
    ip: boolean;
    opt_out_capturing_by_default: boolean;
    opt_out_persistence_by_default: boolean;
    opt_out_capturing_persistence_type: 'localStorage' | 'cookie';
    opt_out_capturing_cookie_prefix: string | null;
    respect_dnt: boolean;
    property_blacklist: string[];
    xhr_headers: {
        [header_name: string]: string;
    };
    on_xhr_error: (failedRequest: XMLHttpRequest) => void;
    inapp_protocol: string;
    inapp_link_new_window: boolean;
    request_batching: boolean;
    sanitize_properties: ((properties: Properties, event_name: string) => Properties) | null;
    properties_string_max_length: number;
    session_recording: SessionRecordingOptions;
    mask_all_element_attributes: boolean;
    mask_all_text: boolean;
    advanced_capture_all_elements: boolean;
    advanced_disable_decide: boolean;
    advanced_disable_toolbar_metrics: boolean;
    get_device_id: (uuid: string) => string;
    name: string;
    callback_fn: string;
    _onCapture: (eventName: string, eventData: CaptureResult) => void;
    _capture_metrics: boolean;
    _capture_performance: boolean;
}
interface OptInOutCapturingOptions {
    capture: (event: string, properties: Properties, options: CaptureOptions) => void;
    capture_event_name: string;
    capture_properties: Properties;
    enable_persistence: boolean;
    clear_persistence: boolean;
    persistence_type: string;
    cookie_prefix: string;
    cookie_expiration: number;
    cross_subdomain_cookie: boolean;
    secure_cookie: boolean;
}
interface isFeatureEnabledOptions {
    send_event: boolean;
}
interface SessionRecordingOptions {
    blockClass?: string | RegExp;
    blockSelector?: string | null;
    ignoreClass?: string;
    maskAllInputs?: boolean;
    maskInputOptions?: MaskInputOptions;
    maskInputFn?: ((text: string) => string) | null;
    slimDOMOptions?: SlimDOMOptions | 'all' | true;
    collectFonts?: boolean;
    inlineStylesheet?: boolean;
}
declare enum Compression {
    GZipJS = "gzip-js",
    LZ64 = "lz64",
    Base64 = "base64"
}
interface XHROptions {
    transport?: 'XHR' | 'sendBeacon';
    method?: 'POST' | 'GET';
    urlQueryArgs?: {
        compression: Compression;
    };
    verbose?: boolean;
    blob?: boolean;
    sendBeacon?: boolean;
}
interface CaptureOptions extends XHROptions {
    $set?: Properties; /** used with $identify */
    $set_once?: Properties; /** used with $identify */
    _batchKey?: string; /** key of queue, e.g. 'sessionRecording' vs 'event' */
    _metrics?: Properties;
    _noTruncate?: boolean; /** if set, overrides and disables config.properties_string_max_length */
    endpoint?: string; /** defaults to '/e/' */
    send_instantly?: boolean; /** if set skips the batched queue */
    timestamp?: Date;
}
interface RetryQueueElement {
    retryAt: Date;
    requestData: QueuedRequestData;
}
interface QueuedRequestData {
    url: string;
    data: Properties;
    options: CaptureOptions;
    headers?: Properties;
    callback?: RequestCallback;
    retriesPerformedSoFar?: number;
}
interface XHRParams extends QueuedRequestData {
    captureMetrics: CaptureMetrics;
    retryQueue: RetryQueue;
    onXHRError: (req: XMLHttpRequest) => void;
}
interface DecideResponse {
    status: number;
    supportedCompression: Compression[];
    config: {
        enable_collect_everything: boolean;
    };
    custom_properties: AutoCaptureCustomProperty[];
    featureFlags: Record<string, string | boolean>;
    sessionRecording?: {
        endpoint?: string;
    };
    editorParams: EditorParams;
    toolbarVersion: 'toolbar'; /** deprecated, moved to editorParams */
    isAuthenticated: boolean;
}
declare type FeatureFlagsCallback = (flags: string[], variants: Record<string, string | boolean>) => void;
interface AutoCaptureCustomProperty {
    name: string;
    css_selector: string;
    event_selectors: string[];
}
interface CompressionData {
    data: string;
    compression?: Compression;
}
interface GDPROptions {
    capture?: (event: string, properties: Properties, options: CaptureOptions) => void; /** function used for capturing a PostHog event to record the opt-in action */
    captureEventName?: string; /** event name to be used for capturing the opt-in action */
    captureProperties?: Properties; /** set of properties to be captured along with the opt-in action */
    persistenceType?: string; /** persistence mechanism used - cookie or localStorage */
    persistencePrefix?: string; /** [__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name */
    cookieExpiration?: number; /** number of days until the opt-in cookie expires */
    crossSubdomainCookie?: boolean; /** whether the opt-in cookie is set as cross-subdomain or not */
    secureCookie?: boolean; /** whether the opt-in cookie is set as secure or not */
    respectDnt?: boolean;
    window?: Window;
}
declare type RequestCallback = (response: Record<string, any>, data?: Properties) => void;
interface PersistentStore {
    is_supported: () => boolean;
    error: (error: any) => void;
    parse: (name: string) => any;
    get: (name: string) => any;
    set: (name: string, value: any, expire_days?: number | null, cross_subdomain?: boolean, secure?: boolean) => void;
    remove: (name: string, cross_subdomain?: boolean) => void;
}
declare type Breaker = {};
declare type EventHandler = (event: Event) => boolean | void;
interface EditorParams {
    jsURL?: string;
    apiURL?: string;
    toolbarVersion?: 'toolbar';
}
interface PostData {
    buffer?: BlobPart;
    compression?: Compression;
    data?: string;
}
interface JSC {
    (): void;
    [key: string]: (response: any) => void;
}
declare type SnippetArrayItem = [method: string, ...args: any[]];

/**
 * PostHog People Object
 * @constructor
 */
declare class PostHogPeople {
    _rinq: PostHog;
    set: (prop: string | Properties, to?: string, callback?: RequestCallback) => void;
    set_once: (prop: string | Properties, to?: string, callback?: RequestCallback) => void;
    constructor(posthog: PostHog);
    toString(): string;
    _send_request(data: Properties, callback?: RequestCallback): Properties;
    _get_config<K extends keyof PostHogConfig>(conf_var: K): PostHogConfig[K];
    _is_reserved_property(prop: string): boolean;
    private set_action;
    private set_once_action;
    private apiActionParser;
}

/**
 * PostHog Persistence Object
 * @constructor
 */
declare class PostHogPersistence {
    props: Properties;
    storage: PersistentStore;
    campaign_params_saved: boolean;
    name: string;
    disabled: boolean | undefined;
    secure: boolean | undefined;
    expire_days: number | undefined;
    default_expiry: number | undefined;
    cross_subdomain: boolean | undefined;
    constructor(config: PostHogConfig);
    properties(): Properties;
    load(): void;
    save(): void;
    remove(): void;
    clear(): void;
    /**
     * @param {Object} props
     * @param {*=} default_value
     * @param {number=} days
     */
    register_once(props: Properties, default_value: any, days?: number): boolean;
    /**
     * @param {Object} props
     * @param {number=} days
     */
    register(props: Properties, days?: number): boolean;
    unregister(prop: string): void;
    update_campaign_params(): void;
    update_search_keyword(referrer: string): void;
    update_referrer_info(referrer: string): void;
    get_referrer_info(): Properties;
    safe_merge(props: Properties): Properties;
    update_config(config: PostHogConfig): void;
    set_disabled(disabled: boolean): void;
    set_cross_subdomain(cross_subdomain: boolean): void;
    get_cross_subdomain(): boolean;
    set_secure(secure: boolean): void;
    set_event_timer(event_name: string, timestamp: number): void;
    remove_event_timer(event_name: string): number;
}

declare class PostHogFeatureFlags {
    instance: PostHog;
    _override_warning: boolean;
    flagCallReported: Record<string, boolean>;
    featureFlagEventHandlers: FeatureFlagsCallback[];
    reloadFeatureFlagsQueued: boolean;
    reloadFeatureFlagsInAction: boolean;
    $anon_distinct_id: string | undefined;
    constructor(instance: PostHog);
    getFlags(): string[];
    getFlagVariants(): Record<string, string | boolean>;
    /**
     * Reloads feature flags asynchronously.
     *
     * Constraints:
     *
     * 1. Avoid parallel requests
     * 2. Delay a few milliseconds after each reloadFeatureFlags call to batch subsequent changes together
     * 3. Don't call this during initial load (as /decide will be called instead), see posthog-core.js
     */
    reloadFeatureFlags(): void;
    setAnonymousDistinctId(anon_distinct_id: string): void;
    setReloadingPaused(isPaused: boolean): void;
    resetRequestQueue(): void;
    _startReloadTimer(): void;
    _reloadFeatureFlagsRequest(): void;
    getFeatureFlag(key: string, options?: {
        send_event?: boolean;
    }): boolean | string;
    isFeatureEnabled(key: string, options?: {
        send_event?: boolean;
    }): boolean;
    addFeatureFlagsHandler(handler: FeatureFlagsCallback): void;
    receivedFeatureFlags(response: DecideResponse): void;
    override(flags: boolean | string[] | Record<string, string | boolean>): void;
    onFeatureFlags(callback: FeatureFlagsCallback): void;
}

declare class SessionRecording {
    instance: PostHog;
    captureStarted: boolean;
    snapshots: any[];
    emit: boolean;
    endpoint: string;
    stopRrweb: listenerHandler | undefined;
    windowId: string | null;
    sessionId: string | null;
    receivedDecide: boolean;
    rrwebRecord: typeof record | undefined;
    constructor(instance: PostHog);
    startRecordingIfEnabled(): void;
    started(): boolean;
    stopRecording(): void;
    isRecordingEnabled(): boolean;
    afterDecideResponse(response: DecideResponse): void;
    startCaptureAndTrySendingQueuedSnapshots(): void;
    _startCapture(): void;
    _updateWindowAndSessionIds(event: eventWithTime): void;
    _onScriptLoaded(): void;
    _captureSnapshot(properties: Properties): void;
}

declare class Toolbar {
    instance: PostHog;
    constructor(instance: PostHog);
    afterDecideResponse(response: DecideResponse): void;
    /**
     * To load the visual editor, we need an access token and other state. That state comes from one of three places:
     * 1. In the URL hash params if the customer is using an old snippet
     * 2. From session storage under the key `editorParams` if the editor was initialized on a previous page
     */
    maybeLoadEditor(location?: Location, localStorage?: Storage | undefined, history?: History): boolean;
    _loadEditor(editorParams: EditorParams): boolean;
}

declare class RequestQueue extends RequestQueueScaffold {
    captureMetrics: CaptureMetrics;
    handlePollRequest: (url: string, data: Properties, options?: XHROptions) => void;
    constructor(captureMetrics: CaptureMetrics, handlePollRequest: (url: string, data: Properties, options?: XHROptions) => void, pollInterval?: number);
    enqueue(url: string, data: Properties, options: XHROptions): void;
    poll(): void;
    updateUnloadMetrics(): void;
    unload(): void;
    formatQueue(): Record<string, QueuedRequestData>;
}

declare class SessionIdManager {
    persistence: PostHogPersistence;
    _windowId: string | null | undefined;
    _sessionId: string | null | undefined;
    window_id_storage_key: string;
    _sessionStartTimestamp: number | null;
    _sessionActivityTimestamp: number | null;
    constructor(config: Partial<PostHogConfig>, persistence: PostHogPersistence);
    _setWindowId(windowId: string): void;
    _getWindowId(): string | null;
    _setSessionId(sessionId: string | null, sessionActivityTimestamp: number | null, sessionStartTimestamp: number | null): void;
    _getSessionId(): [number, string, number];
    resetSessionId(): void;
    checkAndGetSessionAndWindowId(readOnly?: boolean, _timestamp?: number | null): {
        sessionId: string;
        windowId: string;
    };
}

/**
 * Integrate Sentry with PostHog. This will add a direct link to the person in Sentry, and an $exception event in PostHog
 *
 * ### Usage
 *
 *     Sentry.init({
 *          dsn: 'https://example',
 *          integrations: [
 *              new posthog.SentryIntegration(posthog)
 *          ]
 *     })
 *
 * @param {Object} [posthog] The posthog object
 * @param {string} [organization] Optional: The Sentry organization, used to send a direct link from PostHog to Sentry
 * @param {Number} [projectId] Optional: The Sentry project id, used to send a direct link from PostHog to Sentry
 * @param {string} [prefix] Optional: Url of a self-hosted sentry instance (default: https://sentry.io/organizations/)
 */

declare class SentryIntegration implements Integration {
    name: string;
    setupOnce: (addGlobalEventProcessor: (callback: EventProcessor) => void, getCurrentHub: () => Hub) => void;
    constructor(_rinq: PostHog, organization?: string, projectId?: number, prefix?: string);
}

/**
 * PostHog Library Object
 * @constructor
 */
declare class PostHog {
    __loaded: boolean;
    config: PostHogConfig;
    persistence: PostHogPersistence;
    sessionManager: SessionIdManager;
    people: PostHogPeople;
    featureFlags: PostHogFeatureFlags;
    feature_flags: PostHogFeatureFlags;
    toolbar: Toolbar;
    sessionRecording: SessionRecording | undefined;
    _captureMetrics: CaptureMetrics;
    _requestQueue: RequestQueue;
    _retryQueue: RetryQueue;
    _triggered_notifs: any;
    compression: Partial<Record<Compression, boolean>>;
    _jsc: JSC;
    __captureHooks: ((eventName: string) => void)[];
    __request_queue: [url: string, data: Record<string, any>, options: XHROptions, callback?: RequestCallback][];
    __autocapture_enabled: boolean | undefined;
    decideEndpointWasHit: boolean;
    SentryIntegration: typeof SentryIntegration;
    advanced_capture_all_elements: boolean;
    constructor();
    /**
     * This function initializes a new instance of the PostHog capturing object.
     * All new instances are added to the main posthog object as sub properties (such as
     * posthog.library_name) and also returned by this function. To define a
     * second instance on the page, you would call:
     *
     *     posthog.init('new token', { your: 'config' }, 'library_name');
     *
     * and use it like so:
     *
     *     posthog.library_name.capture(...);
     *
     * @param {String} token   Your PostHog API token
     * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/posthog/posthog-js/blob/6e0e873/src/posthog-core.js#L57-L91">See a list of default config options</a>.
     * @param {String} [name]    The name for the new posthog instance that you want created
     */
    init(token: string, config?: Partial<PostHogConfig>, name?: string): PostHog | void;
    _init(token: string, config?: Partial<PostHogConfig>, name?: string): void;
    _loaded(): void;
    _start_queue_if_opted_in(): void;
    _dom_loaded(): void;
    /**
     * _prepare_callback() should be called by callers of _send_request for use
     * as the callback argument.
     *
     * If there is no callback, this returns null.
     * If we are going to make XHR/XDR requests, this returns a function.
     * If we are going to use script tags, this returns a string to use as the
     * callback GET param.
     */
    _prepare_callback(callback?: RequestCallback, data?: Properties): RequestCallback | null | string;
    _handle_unload(): void;
    _handle_queued_event(url: string, data: Record<string, any>, options?: XHROptions): void;
    __compress_and_send_json_request(url: string, jsonData: string, options: XHROptions, callback?: RequestCallback): void;
    _send_request(url: string, data: Record<string, any>, options: XHROptions, callback?: RequestCallback): void;
    /**
     * _execute_array() deals with processing any posthog function
     * calls that were called before the PostHog library were loaded
     * (and are thus stored in an array so they can be called later)
     *
     * Note: we fire off all the posthog function calls && user defined
     * functions BEFORE we fire off posthog capturing calls. This is so
     * identify/register/set_config calls can properly modify early
     * capturing calls.
     *
     * @param {Array} array
     */
    _execute_array(array: SnippetArrayItem[]): void;
    /**
     * push() keeps the standard async-array-push
     * behavior around after the lib is loaded.
     * This is only useful for external integrations that
     * do not wish to rely on our convenience methods
     * (created in the snippet).
     *
     * ### Usage:
     *     posthog.push(['register', { a: 'b' }]);
     *
     * @param {Array} item A [function_name, args...] array to be executed
     */
    push(item: SnippetArrayItem): void;
    /**
     * Capture an event. This is the most important and
     * frequently used PostHog function.
     *
     * ### Usage:
     *
     *     // capture an event named 'Registered'
     *     posthog.capture('Registered', {'Gender': 'Male', 'Age': 21});
     *
     *     // capture an event using navigator.sendBeacon
     *     posthog.capture('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
     *
     * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
     * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
     * @param {Object} [options] Optional configuration for this capture request.
     * @param {String} [options.transport] Transport method for network request ('XHR' or 'sendBeacon').
     * @param {Date} [options.timestamp] Timestamp is a Date object. If not set, it'll automatically be set to the current time.
     */
    capture(event_name: string, properties?: Properties | null, options?: CaptureOptions): CaptureResult | void;
    _addCaptureHook(callback: (eventName: string) => void): void;
    _invokeCaptureHooks(eventName: string, eventData: CaptureResult): void;
    _calculate_event_properties(event_name: string, event_properties: Properties, start_timestamp: number): Properties;
    /**
     * Register a set of super properties, which are included with all
     * events. This will overwrite previous super property values.
     *
     * ### Usage:
     *
     *     // register 'Gender' as a super property
     *     posthog.register({'Gender': 'Female'});
     *
     *     // register several super properties when a user signs up
     *     posthog.register({
     *         'Email': 'jdoe@example.com',
     *         'Account Type': 'Free'
     *     });
     *
     * @param {Object} properties An associative array of properties to store about the user
     * @param {Number} [days] How many days since the user's last visit to store the super properties
     */
    register(properties: Properties, days?: number): void;
    /**
     * Register a set of super properties only once. This will not
     * overwrite previous super property values, unlike register().
     *
     * ### Usage:
     *
     *     // register a super property for the first time only
     *     posthog.register_once({
     *         'First Login Date': new Date().toISOString()
     *     });
     *
     * ### Notes:
     *
     * If default_value is specified, current super properties
     * with that value will be overwritten.
     *
     * @param {Object} properties An associative array of properties to store about the user
     * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
     * @param {Number} [days] How many days since the users last visit to store the super properties
     */
    register_once(properties: Properties, default_value?: Property, days?: number): void;
    /**
     * Delete a super property stored with the current user.
     *
     * @param {String} property The name of the super property to remove
     */
    unregister(property: string): void;
    _register_single(prop: string, value: Property): void;
    getFeatureFlag(key: string, options?: {
        send_event?: boolean;
    }): boolean | string | undefined;
    isFeatureEnabled(key: string, options?: isFeatureEnabledOptions): boolean;
    reloadFeatureFlags(): void;
    onFeatureFlags(callback: (flags: string[], variants: Record<string, boolean | string>) => void): void;
    /**
     * Identify a user with a unique ID instead of a PostHog
     * randomly generated distinct_id. If the method is never called,
     * then unique visitors will be identified by a UUID generated
     * the first time they visit the site.
     *
     * If user properties are passed, they are also sent to posthog.
     *
     * ### Usage:
     *
     *      posthog.identify('[user unique id]')
     *      posthog.identify('[user unique id]', { email: 'john@example.com' })
     *      posthog.identify('[user unique id]', {}, { referral_code: '12345' })
     *
     * ### Notes:
     *
     * You can call this function to overwrite a previously set
     * unique ID for the current user. PostHog cannot translate
     * between IDs at this time, so when you change a user's ID
     * they will appear to be a new user.
     *
     * When used alone, posthog.identify will change the user's
     * distinct_id to the unique ID provided. When used in tandem
     * with posthog.alias, it will allow you to identify based on
     * unique ID and map that back to the original, anonymous
     * distinct_id given to the user upon her first arrival to your
     * site (thus connecting anonymous pre-signup activity to
     * post-signup activity). Though the two work together, do not
     * call identify() at the same time as alias(). Calling the two
     * at the same time can cause a race condition, so it is best
     * practice to call identify on the original, anonymous ID
     * right after you've aliased it.
     *
     * @param {String} [new_distinct_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
     * @param {Object} [userPropertiesToSet] Optional: An associative array of properties to store about the user
     * @param {Object} [userPropertiesToSetOnce] Optional: An associative array of properties to store about the user. If property is previously set, this does not override that value.
     */
    identify(new_distinct_id?: string, userPropertiesToSet?: Properties, userPropertiesToSetOnce?: Properties): void;
    /**
     * Alpha feature: don't use unless you know what you're doing!
     *
     * Sets group analytics information for subsequent events and reloads feature flags.
     *
     * @param {String} groupType Group type (example: 'organization')
     * @param {String} groupKey Group key (example: 'org::5')
     * @param {Object} groupPropertiesToSet Optional properties to set for group
     */
    group(groupType: string, groupKey: string, groupPropertiesToSet?: Properties): void;
    /**
     * Clears super properties and generates a new random distinct_id for this instance.
     * Useful for clearing data when a user logs out.
     */
    reset(reset_device_id?: boolean): void;
    /**
     * Returns the current distinct id of the user. This is either the id automatically
     * generated by the library or the id that has been passed by a call to identify().
     *
     * ### Notes:
     *
     * get_distinct_id() can only be called after the PostHog library has finished loading.
     * init() has a loaded function available to handle this automatically. For example:
     *
     *     // set distinct_id after the posthog library has loaded
     *     posthog.init('YOUR PROJECT TOKEN', {
     *         loaded: function(posthog) {
     *             distinct_id = posthog.get_distinct_id();
     *         }
     *     });
     */
    get_distinct_id(): string;
    getGroups(): Record<string, any>;
    /**
     * Create an alias, which PostHog will use to link two distinct_ids going forward (not retroactively).
     * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
     * following is a valid scenario:
     *
     *     posthog.alias('new_id', 'existing_id');
     *     ...
     *     posthog.alias('newer_id', 'new_id');
     *
     * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
     *
     * ### Notes:
     *
     * The best practice is to call alias() when a unique ID is first created for a user
     * (e.g., when a user first registers for an account and provides an email address).
     * alias() should never be called more than once for a given user, except to
     * chain a newer ID to a previously new ID, as described above.
     *
     * @param {String} alias A unique identifier that you want to use for this user in the future.
     * @param {String} [original] The current identifier being used for this user.
     */
    alias(alias: string, original?: string): CaptureResult | void | number;
    /**
     * Update the configuration of a posthog library instance.
     *
     * The default config is:
     *
     *     {
     *       // Posthog host
     *       api_host: 'https://app.posthog.com',
     *
     *       // HTTP method for capturing requests
     *       api_method: 'POST'
     *
     *       // Automatically capture clicks, form submissions and change events
     *       autocapture: true
     *
     *       // Capture rage clicks (beta) - useful for session recording
     *       rageclick: false
     *
     *       // transport for sending requests ('XHR' or 'sendBeacon')
     *       // NB: sendBeacon should only be used for scenarios such as
     *       // page unload where a "best-effort" attempt to send is
     *       // acceptable; the sendBeacon API does not support callbacks
     *       // or any way to know the result of the request. PostHog
     *       // capturing via sendBeacon will not support any event-
     *       // batching or retry mechanisms.
     *       api_transport: 'XHR'
     *
     *       // super properties cookie expiration (in days)
     *       cookie_expiration: 365
     *
     *       // super properties span subdomains
     *       cross_subdomain_cookie: true
     *
     *       // debug mode
     *       debug: false
     *
     *       // if this is true, the posthog cookie or localStorage entry
     *       // will be deleted, and no user persistence will take place
     *       disable_persistence: false
     *
     *       // if this is true, PostHog will automatically determine
     *       // City, Region and Country data using the IP address of
     *       //the client
     *       ip: true
     *
     *       // opt users out of capturing by this PostHog instance by default
     *       opt_out_capturing_by_default: false
     *
     *       // opt users out of browser data storage by this PostHog instance by default
     *       opt_out_persistence_by_default: false
     *
     *       // persistence mechanism used by opt-in/opt-out methods - cookie
     *       // or localStorage - falls back to cookie if localStorage is unavailable
     *       opt_out_capturing_persistence_type: 'localStorage'
     *
     *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
     *       opt_out_capturing_cookie_prefix: null
     *
     *       // type of persistent store for super properties (cookie/
     *       // localStorage) if set to 'localStorage', any existing
     *       // posthog cookie value with the same persistence_name
     *       // will be transferred to localStorage and deleted
     *       persistence: 'cookie'
     *
     *       // name for super properties persistent store
     *       persistence_name: ''
     *
     *       // names of properties/superproperties which should never
     *       // be sent with capture() calls
     *       property_blacklist: []
     *
     *       // if this is true, posthog cookies will be marked as
     *       // secure, meaning they will only be transmitted over https
     *       secure_cookie: false
     *
     *       // should we capture a page view on page load
     *       capture_pageview: true
     *
     *       // if you set upgrade to be true, the library will check for
     *       // a cookie from our old js library and import super
     *       // properties from it, then the old cookie is deleted
     *       // The upgrade config option only works in the initialization,
     *       // so make sure you set it when you create the library.
     *       upgrade: false
     *
     *       // if this is true, session recording is always disabled.
     *       disable_session_recording: false,
     *
     *       // extra HTTP request headers to set for each API request, in
     *       // the format {'Header-Name': value}
     *       xhr_headers: {}
     *
     *       // protocol for fetching in-app message resources, e.g.
     *       // 'https://' or 'http://'; defaults to '//' (which defers to the
     *       // current page's protocol)
     *       inapp_protocol: '//'
     *
     *       // whether to open in-app message link in new tab/window
     *       inapp_link_new_window: false
     *
     *      // a set of rrweb config options that PostHog users can configure
     *      // see https://github.com/rrweb-io/rrweb/blob/master/guide.md
     *      session_recording: {
     *         blockClass: 'ph-no-capture',
     *         blockSelector: null,
     *         ignoreClass: 'ph-ignore-input',
     *         maskAllInputs: true,
     *         maskInputOptions: {},
     *         maskInputFn: null,
     *         slimDOMOptions: {},
     *         collectFonts: false
     *      }
     *
     *      // prevent autocapture from capturing any attribute names on elements
     *      mask_all_element_attributes: false
     *
     *      // prevent autocapture from capturing textContent on all elements
     *      mask_all_text: false
     *
     *      // Anonymous users get a random UUID as their device by default.
     *      // This option allows overriding that option.
     *      get_device_id: (uuid) => uuid
     *     }
     *
     *
     * @param {Object} config A dictionary of new configuration values to update
     */
    set_config(config: Partial<PostHogConfig>): void;
    /**
     * turns session recording on, and updates the config option
     * disable_session_recording to false
     */
    startSessionRecording(): void;
    /**
     * turns session recording off, and updates the config option
     * disable_session_recording to true
     */
    stopSessionRecording(): void;
    /**
     * returns a boolean indicating whether session recording
     * is currently running
     */
    sessionRecordingStarted(): boolean;
    /**
     * returns the current config object for the library.
     */
    get_config<K extends keyof PostHogConfig>(prop_name: K): PostHogConfig[K];
    /**
     * Returns the value of the super property named property_name. If no such
     * property is set, get_property() will return the undefined value.
     *
     * ### Notes:
     *
     * get_property() can only be called after the PostHog library has finished loading.
     * init() has a loaded function available to handle this automatically. For example:
     *
     *     // grab value for 'user_id' after the posthog library has loaded
     *     posthog.init('YOUR PROJECT TOKEN', {
     *         loaded: function(posthog) {
     *             user_id = posthog.get_property('user_id');
     *         }
     *     });
     *
     * @param {String} property_name The name of the super property you want to retrieve
     */
    get_property(property_name: string): Property | undefined;
    toString(): string;
    _gdpr_init(): void;
    /**
     * Enable or disable persistence based on options
     * only enable/disable if persistence is not already in this state
     * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
     * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
     */
    _gdpr_update_persistence(options: Partial<OptInOutCapturingOptions>): void;
    _gdpr_call_func<R = any>(func: (token: string, options: GDPROptions) => R, options?: Partial<OptInOutCapturingOptions>): R;
    /**
     * Opt the user in to data capturing and cookies/localstorage for this PostHog instance
     *
     * ### Usage
     *
     *     // opt user in
     *     posthog.opt_in_capturing();
     *
     *     // opt user in with specific event name, properties, cookie configuration
     *     posthog.opt_in_capturing({
     *         capture_event_name: 'User opted in',
     *         capture_event_properties: {
     *             'Email': 'jdoe@example.com'
     *         },
     *         cookie_expiration: 30,
     *         secure_cookie: true
     *     });
     *
     * @param {Object} [options] A dictionary of config options to override
     * @param {function} [options.capture] Function used for capturing a PostHog event to record the opt-in action (default is this PostHog instance's capture method)
     * @param {string} [options.capture_event_name=$opt_in] Event name to be used for capturing the opt-in action
     * @param {Object} [options.capture_properties] Set of properties to be captured along with the opt-in action
     * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
     * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
     * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
     * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
     */
    opt_in_capturing(options?: Partial<OptInOutCapturingOptions>): void;
    /**
     * Opt the user out of data capturing and cookies/localstorage for this PostHog instance
     *
     * ### Usage
     *
     *     // opt user out
     *     posthog.opt_out_capturing();
     *
     *     // opt user out with different cookie configuration from PostHog instance
     *     posthog.opt_out_capturing({
     *         cookie_expiration: 30,
     *         secure_cookie: true
     *     });
     *
     * @param {Object} [options] A dictionary of config options to override
     * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
     * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
     * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
     * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
     */
    opt_out_capturing(options?: Partial<OptInOutCapturingOptions>): void;
    /**
     * Check whether the user has opted in to data capturing and cookies/localstorage for this PostHog instance
     *
     * ### Usage
     *
     *     const has_opted_in = posthog.has_opted_in_capturing();
     *     // use has_opted_in value
     *
     * @param {Object} [options] A dictionary of config options to override
     * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
     * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
     * @returns {boolean} current opt-in status
     */
    has_opted_in_capturing(options?: Partial<OptInOutCapturingOptions>): boolean;
    /**
     * Check whether the user has opted out of data capturing and cookies/localstorage for this PostHog instance
     *
     * ### Usage
     *
     *     const has_opted_out = posthog.has_opted_out_capturing();
     *     // use has_opted_out value
     *
     * @param {Object} [options] A dictionary of config options to override
     * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
     * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
     * @returns {boolean} current opt-out status
     */
    has_opted_out_capturing(options?: Partial<OptInOutCapturingOptions>): boolean;
    /**
     * Clear the user's opt in/out status of data capturing and cookies/localstorage for this PostHog instance
     *
     * ### Usage
     *
     *     // clear user's opt-in/out status
     *     posthog.clear_opt_in_out_capturing();
     *
     *     // clear user's opt-in/out status with specific cookie configuration - should match
     *     // configuration used when opt_in_capturing/opt_out_capturing methods were called.
     *     posthog.clear_opt_in_out_capturing({
     *         cookie_expiration: 30,
     *         secure_cookie: true
     *     });
     *
     * @param {Object} [options] A dictionary of config options to override
     * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
     * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
     * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
     * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
     * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
     */
    clear_opt_in_out_capturing(options?: Partial<OptInOutCapturingOptions>): void;
    debug(debug?: boolean): void;
    decodeLZ64(input: string | null | undefined): string | null;
}

declare const posthog: PostHog;

export { AutoCaptureCustomProperty, Breaker, CaptureCallback, CaptureOptions, CaptureResult, Compression, CompressionData, DecideResponse, EditorParams, EventHandler, FeatureFlagsCallback, GDPROptions, JSC, OptInOutCapturingOptions, PersistentStore, PostData, PostHog, PostHogConfig, Properties, Property, QueuedRequestData, RequestCallback, RetryQueueElement, SessionRecordingOptions, SnippetArrayItem, XHROptions, XHRParams, posthog as default, isFeatureEnabledOptions, posthog };
