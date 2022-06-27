export default {
    sentry: {
        dsn: process.env.SENTRY_DSN || '',
        tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE || 0.3,
    }
};
