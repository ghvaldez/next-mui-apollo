import { CodegenConfig } from "@graphql-codegen/cli";


const config: CodegenConfig = {
  schema: "http://localhost:4000",  //TODO: set this as some sort of config or env var etc...
  documents: ["app/**/*.tsx"],
  generates: {
    "./app/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    }
  },
  ignoreNoDocuments: true,
};

export default config;