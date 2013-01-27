freebase.mqlread=
{
  "aliases": [
    "query",
    "mql_read"
  ],
  "description": "query freebase using the MQL api",
  "code": {},
  "tests": []
}

freebase.lookup=
{
  "aliases": [],
  "description": "a freebase search with filtering to ensure reasonable confidence",
  "code": {},
  "tests": []
}

freebase.get_id=
{
  "aliases": [],
  "description": "turn a string into a freebase id",
  "code": {},
  "tests": []
}

freebase.topic=
{
  "aliases": [
    "topic_api",
    "all_data",
    "data",
    "everything",
    "get_data"
  ],
  "description": "get all of a topic's data using the freebase topic api",
  "code": {},
  "tests": []
}

freebase.search=
{
  "aliases": [],
  "description": "use freebase's search api",
  "code": {},
  "tests": []
}

freebase.paginate=
{
  "aliases": [
    "continue",
    "all",
    "each"
  ],
  "description": "continue a query until it's done or hits your options.max ",
  "code": {},
  "tests": []
}

freebase.grammar=
{
  "aliases": [],
  "description": "get a topic's linguistic data, like tense, inflection, and gramatical gender",
  "code": {},
  "tests": []
}

freebase.same_as_links=
{
  "aliases": [
    "sameas",
    "sameAs",
    "sameaslinks",
    "links",
    "sameas_links",
    "external_links",
    "weblinks"
  ],
  "description": "get all of a topics weblinks",
  "code": {},
  "tests": []
}

freebase.translate=
{
  "aliases": [
    "translate_to",
    "multilingual",
    "i8n",
    "get_translation"
  ],
  "description": "get translated names for a topic",
  "code": {},
  "tests": []
}

freebase.image=
{
  "aliases": [
    "pic",
    "photo",
    "picture",
    "get_image",
    "image_url",
    "image_src"
  ],
  "description": "get a image href for a topic",
  "code": {},
  "tests": []
}

freebase.description=
{
  "aliases": [
    "get_description",
    "blurb",
    "get_blurb",
    "blurb_api",
    "text",
    "get_text"
  ],
  "description": "get a paragraph of text about a topic",
  "code": {},
  "tests": []
}

freebase.notable=
{
  "aliases": [
    "notable_type",
    "notabletype",
    "notable_for",
    "notable_as",
    "main_type",
    "type"
  ],
  "description": "get the main type for a topic",
  "code": {},
  "tests": []
}

freebase.sentence=
{
  "aliases": [],
  "description": "get the first sentence of a topic's wikipedia article",
  "code": {},
  "tests": []
}

freebase.list=
{
  "aliases": [],
  "description": "from a type, or a 'is a' topic, list out topics that fit the profile, eg. freebase.list('earthquakes')",
  "code": {},
  "tests": []
}

freebase.place_data=
{
  "aliases": [
    "city",
    "country",
    "province",
    "place_info",
    "location_info",
    "location",
    "whereis"
  ],
  "description": "get city, country, province, and timezone data for a geoco-ordinate",
  "code": {},
  "tests": []
}

freebase.incoming=
{
  "aliases": [
    "incoming_links",
    "incoming_nodes",
    "inlinks"
  ],
  "description": "all incoming nodes to a topic",
  "code": {},
  "tests": []
}

freebase.outgoing=
{
  "aliases": [
    "outgoing_links",
    "outgoing_nodes",
    "outlinks"
  ],
  "description": "all outgoing nodes to a topic",
  "code": {},
  "tests": []
}

freebase.graph=
{
  "aliases": [],
  "description": "generate subject-verb-object pairs for all a topic's data, including inside cvts",
  "code": {},
  "tests": []
}

freebase.related=
{
  "aliases": [
    "related_topics",
    "similar",
    "related_to",
    "get_related"
  ],
  "description": "list some similar or neighbouring topics for a topic",
  "code": {},
  "tests": []
}

freebase.is_a=
{
  "aliases": [],
  "description": "list out a topics 'is_a' data, like its types, or professions",
  "code": {},
  "tests": []
}

freebase.question=
{
  "aliases": [],
  "description": "given a topic and a property, answer the question. supports natural language lookups",
  "code": {},
  "tests": []
}

freebase.dig=
{
  "aliases": [],
  "description": "given a transitive property like '/location/location/contained_by', iterate over the data as much as possible",
  "code": {},
  "tests": []
}

freebase.gallery=
{
  "aliases": [
    "images",
    "get_images"
  ],
  "description": "list topics with images",
  "code": {},
  "tests": []
}

freebase.wordnet=
{
  "aliases": [],
  "description": "look up a word in wordnet",
  "code": {},
  "tests": []
}

freebase.transitive=
{
  "aliases": [],
  "description": "*",
  "code": {},
  "tests": []
}

freebase.geolocation=
{
  "aliases": [
    "geo",
    "geocoordinates",
    "geo_location",
    "lat_lng",
    "location"
  ],
  "description": "get a topics lat_lng data",
  "code": {},
  "tests": []
}

freebase.nearby=
{
  "aliases": [
    "near",
    "close_to"
  ],
  "description": "topics geographicaly close to another topic",
  "code": {},
  "tests": []
}

freebase.inside=
{
  "aliases": [
    "inside_of",
    "within",
    "contained_by",
    "contains"
  ],
  "description": "list topics inside_of this topic",
  "code": {},
  "tests": []
}

freebase.wikipedia_page=
{
  "aliases": [],
  "description": "get a topic's entire wikipedia article",
  "code": {},
  "tests": []
}

freebase.wikipedia_categories=
{
  "aliases": [],
  "description": "get a topic's categories in wikipedia",
  "code": {},
  "tests": []
}

freebase.wikipedia_links=
{
  "aliases": [],
  "description": "get the topics that this topic links to on wikipedia",
  "code": {},
  "tests": []
}

freebase.wikipedia_external_links=
{
  "aliases": [],
  "description": "get the websites linked to from this topic's wikipedia page",
  "code": {},
  "tests": []
}

freebase.schema_introspection=
{
  "aliases": [],
  "description": "get some common analysis from a type or property",
  "code": {},
  "tests": []
}

freebase.property_introspection=
{
  "aliases": [],
  "description": "get some common analysis from a property",
  "code": {},
  "tests": []
}

freebase.property_lookup=
{
  "aliases": [],
  "description": "search for a freebase property, using property aliases and inflection",
  "code": {},
  "tests": []
}

freebase.mql_encode=
{
  "aliases": [
    "encode",
    "escape"
  ],
  "description": "escape text to fit MQL queries and keys",
  "code": {},
  "tests": []
}

freebase.add_widget=
{
  "aliases": [],
  "description": "get a html printout to render this topic",
  "code": {},
  "tests": []
}
