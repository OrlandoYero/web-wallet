import * as ARCAD from '../translations/exception/arcad-lang-excep.json';

export class TranslateException {
    public static getException(portal: string, lang: string): any {
        switch (portal) {
            case 'arcad':
                // tslint:disable-next-line: no-string-literal
                return ARCAD['default'][lang];
            default: return {};
        }
    }
}
