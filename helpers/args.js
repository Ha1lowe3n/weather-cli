export const getArgs = (args) => {
    const res = {};
    const [executer, file, ...rest] = args;

    rest.forEach((value, i, array) => {
        if (value.charAt(0) === "-") {
            if (i === array.length - 1) {
                res[value.substring(1)] = true;
            } else if (array[i + 1].charAt(0) !== "-") {
                res[value.substring(1)] = array[i + 1];
            } else {
                res[value.substring(1)] = true;
            }
        }
    });

    return res;
};
