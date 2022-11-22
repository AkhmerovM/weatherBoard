declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
}
declare module '*.png' {
    const content: never;
    export = content;
}
declare module '*.gif' {
    const content: never;
    export = content;
}
type sparticlesType = {
    Sparticles: (obj: HTMLDivElement, options: object) => object;
};
declare const mySparticles: sparticlesType;
