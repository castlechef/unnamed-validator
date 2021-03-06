import { Field } from '../field';
import { FieldFactory } from '../field/FieldFactory';
import { Rule } from '../rule';
import { Validation } from '../types';
export interface SchemaOptions {
}
export declare const defaultSchemaOptions: SchemaOptions;
export declare class Schema {
    protected opts: SchemaOptions;
    protected fields: Map<string, Schema | Field<any, Rule<any>>>;
    constructor(opts?: SchemaOptions);
    addField<T, F extends Field<T, Rule<T>>>(fieldName: string, field: (ff: FieldFactory<T, Rule<T>>) => F): this;
    addField<T, F extends Field<T, Rule<T>>>(fieldName: string, field: F): this;
    addSchemaField(fieldName: string, schema: Schema): this;
    addSchemaField(fieldName: string, schema: (sf: Schema) => Schema): this;
    test(obj: any): Validation;
    private ensureFieldNameIsUnique;
}
export declare function isSchema(s: Schema | Field<any, Rule<any>>): s is Schema;
export declare function createValidationSchema(opts?: SchemaOptions): Schema;
