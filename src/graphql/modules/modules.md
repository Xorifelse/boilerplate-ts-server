# Modules

## Root Schema

The root schema is there to define types, fragments, etc, to make sure they exist.

## Module

Every folder inside here is concidered a module, they should extend types defined in the ***root schema***  and consists of the following:

- `schema.gql`

If in your schema you `extend` either a `Query`, `Mutation` or `Subscription` it expects the resolver to exist in the following files:

- `query.ts`
- `mutation.ts`
- `subscription.ts`

If you don't, it will warn you.
All module files should `export default` an object containing `named` functions as defined in the `schema.gql`.

It will stitch all the modules together as 1 big schema.
