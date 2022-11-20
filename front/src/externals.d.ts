declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
}
type sparticlesType = {
    Sparticles: (obj: HTMLDivElement, options: object) => object;
};
declare const mySparticles: sparticlesType;
