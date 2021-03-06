/* @flow */
// Module with the same interface as the core aphrodite module,
// except that styles injected do not automatically have !important
// appended to them.
import {defaultSelectorHandlers} from './generate';
import makeExports from './exports';

const useImportant = false; // Don't add !important to style definitions

const Aphrodite = makeExports(
    useImportant,
    defaultSelectorHandlers
);

const {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
} = Aphrodite;

export {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
};
