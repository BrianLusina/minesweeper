/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly ENV: 'development' | 'staging' | 'test' | 'production';
      readonly API_URL: string;
      readonly NODE_ENV: 'development' | 'production' | 'test' | 'staging';
      readonly SENTRY_DSN: string;
      readonly API_KEY: string;
      readonly AUTH_DOMAIN: string;
      readonly PROJECT_ID: string;
      readonly STORAGE_BUCKET: string;
      readonly MESSAGING_SENDER_ID: string;
      readonly APP_ID: string;
      readonly PUBLIC_URL: string;
      readonly PAPERTRAIL_HOST: string,
      readonly PAPERTRAIL_PORT: string,
      readonly GOOGLE_MAPS_KEY: string,
      readonly FACEBOOK_APP_ID: string,
      readonly GOOGLE_CLIENT_ID: string,
    }
  }
  
  declare module '*.avif' {
    const src: string;
    export default src;
  }
  
  declare module '*.bmp' {
    const src: string;
    export default src;
  }
  
  declare module '*.gif' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.webp' {
      const src: string;
      export default src;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
      SVGSVGElement
    > & { title?: string }>;
  
    const src: string;
    export default src;
  }
  
  declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }