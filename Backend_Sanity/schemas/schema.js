// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import testimonials from "./testimonials";
import Abouts from "./Abouts";
import Works from "./Works";
import brands from "./brands";
import contact from "./contact";
import experiences from "./experiences";
import workExperience from "./workExperience";
import Skills from "./Skills";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  types: schemaTypes.concat([
    /* Your types here! */
    testimonials,
    Abouts,
    Works,
    Skills,
    brands,
    contact,
    experiences,
    workExperience,
  ]),
});
