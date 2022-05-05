export const ClassComposer = (initialClass, ...args) => {
    return args.reduce((previous, current) => {
        return previous + " " + current;
    }, initialClass);
};
