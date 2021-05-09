import { yupResolver } from './resolvers/yup';
import { fastestValidatorResolver } from './resolvers/fastest-validator';
import { joiResolver } from './resolvers/joi';

export type SCHEMA_TYPE =
  | 'Yup'
  | 'FastestValidator'
  | 'Joi'
  | 'Zod' // TODO add Zod validation
  | 'SuperStruct' // TODO SuperStruct SuperStruct validation
  | 'Vest' // TODO SuperStruct Zod validation
  | 'ClassValidator' // TODO SuperStruct ClassValidator validation
  | 'IoTS' // TODO SuperStruct IoTS validation
  | 'Nope'; // TODO SuperStruct IoTS validation

export function createResolver(type: SCHEMA_TYPE, schema: any) {
  switch (type) {
    case 'Yup':
      return yupResolver(schema);
    case 'FastestValidator':
      return fastestValidatorResolver(schema);
    case 'Joi':
      return joiResolver(schema);

    default:
      throw new Error(`Does not support ${type} validation yet!`);
  }
}
