import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { LiteralUnion } from 'type-fest';

type SCHEMA_TYPE = LiteralUnion<"Yup" | "FastestValidator" | "Joi" | "Zod", string>;

type NextHandler = (err?: Error) => void;
type ValidationHoF = {
    type: SCHEMA_TYPE;
    mode?: "body" | "query" | "headers";
    schema: unknown;
};
declare function plainValidations(nxtReq: NextRequest, validations: ValidationHoF[]): unknown;
declare function withValidation({ type, schema, mode, }: ValidationHoF): (handler?: ((req: NextApiRequest, res: NextApiResponse<any>) => any) | undefined) => (req: NextApiRequest, res: NextApiResponse, next?: NextHandler | undefined) => Promise<any>;
declare function withValidations(validations: ValidationHoF[]): (handler?: ((req: NextApiRequest, res: NextApiResponse<any>) => any) | undefined) => (req: NextApiRequest, res: NextApiResponse, next?: NextHandler) => Promise<any>;

export { plainValidations, withValidation, withValidations };
