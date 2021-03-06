export const heading = () => {
    return `main h4`;
};

export const table = (tableSelector: string) => {
    return {
        selector: () => tableSelector,
        rows: () => `${tableSelector} tbody tr`,
        row: (index: number) => `${tableSelector} tbody tr:nth-child(${index})`,
        cell: (index: number, col: number, suffix = '') =>
            `${tableSelector} tbody tr:nth-child(${index})  td:nth-child(${col}) ${suffix}`,
    };
};

export const form = (dialogSelector: string) => {
    return {
        selector: () => dialogSelector,
        input: (selector: string) => `${dialogSelector} ${selector} input`,
        textarea: (selector: string) => `${dialogSelector} ${selector} textarea`,
        button: (selector: string) => `${dialogSelector} button${selector}`,
    };
};

export const $confirmDialog = form('.confirm-dialog');
