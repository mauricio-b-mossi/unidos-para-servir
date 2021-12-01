// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import visitas from './visitas'
import member from './member'
import sponsor from './sponsor'
import MisionYVision from './MisionYVision'
import NuestrasVisitas from './NuestrasVisitas'
import Ayudar from './Ayudar'
import QuienesSomos from './QuienesSomos'
import NuestrosPatrocinadores from './NuestrosPatrocinadores'
import NuestrosFundadores from './NuestrosFundadores'
import Home from './Home'
import item from './item'
import logros from './logros'
import NuestrosVoluntarios from './NuestrosVoluntarios'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    Home,
    Ayudar,
    MisionYVision,
    NuestrasVisitas,
    QuienesSomos,
    NuestrosFundadores,
    NuestrosVoluntarios,
    NuestrosPatrocinadores,
    logros,
    item,
    visitas,
    member,
    sponsor,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
