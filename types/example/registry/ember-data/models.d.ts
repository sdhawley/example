// types/example/registry/models.d.ts

import SomeModel from 'example/models/some-model'
declare module "ember-data" {
    interface ModelRegistry {        
        "some-model": SomeModel;
    }
}