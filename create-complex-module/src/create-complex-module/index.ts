import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

function generateFiles(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: schema.name
      }),
      move('src/app/modules')
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createComplexModule(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([generateFiles(schema)])(
      tree,
      context
    );
  };
}
