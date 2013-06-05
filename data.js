

var data = (function() {

  var data = {};



  data.properties={
  	"alias":"/common/topic/alias",
  	"type":"/type/object/type",
  	"name":"/type/object/name",
  	"id":"/type/object/id",
  	"mid":"/type/object/mid",
  	"key":"/type/object/key"
  }

data.is_a = ["/amusement_parks/ride/ride_type", "/amusement_parks/roller_coaster/propulsion", "/amusement_parks/roller_coaster/train_configuration", "/architecture/building/building_function", "/architecture/museum/type_of_museum", "/astronomy/asteroid/spectral_type", "/astronomy/celestial_object/category", "/astronomy/extraterrestrial_location/type_of_planetographic_feature", "/astronomy/galaxy/galaxy_classification_hubble",
    "/astronomy/galaxy_classification_code/galaxy_shape", "/astronomy/near_earth_object/near_earth_object_classification", "/astronomy/orbital_relationship/orbit_type", "/astronomy/star/spectral_type", "/astronomy/telescope/type_of_telescope", "/automotive/model/automotive_class", "/automotive/transmission/classification", "/aviation/aircraft_model/aircraft_type", "/aviation/airliner_accident/accident_type", "/aviation/airport/airport_type", "/aviation/aviation_waypoint/waypoint_type", "/award/competition/type_of_competition",
    "/bicycles/bicycle_model/bicycle_type", "/biology/breed_registration/breed_group", "/biology/fossil_specimen/organism", "/biology/gene_group_membership/group", "/biology/gene_ontology_group/group_type", "/biology/organism/organism_type", "/biology/organism/sex", "/biology/organism_classification/rank", "/biology/pedigreed_animal/breed", "/boats/ship/ship_class", "/boats/ship_class/ship_type", "/book/book_edition/binding", "/book/periodical_format_period/format", "/book/poem/verse_form", "/book/short_non_fiction/mode_of_writing",
    "/business/consumer_product/category", "/business/issue/type_of_issue", "/business/product_line/category", "/celebrities/sexual_orientation_phase/sexual_orientation", "/chemistry/chemical_compound/classifications", "/chemistry/chemical_element/chemical_series", "/chemistry/chemical_element/periodic_table_block", "/computer/computer_peripheral/peripheral_class", "/computer/file_format/genre", "/conferences/conference_series/type_of_conference", "/cricket/cricket_match/match_type", "/cvg/computer_videogame/gameplay_modes",
    "/digicams/digital_camera/format", "/distilled_spirits/blended_spirit/style", "/distilled_spirits/distilled_spirit/spirit_type", "/distilled_spirits/infused_spirit/infusion_style", "/education/educational_institution/school_type", "/education/fraternity_sorority/fraternity_sorority_type", "/engineering/battery/cell_type", "/engineering/battery/size", "/engineering/battery_size/shape_format", "/engineering/engine/category", "/engineering/piston_engine/cooling_method", "/engineering/piston_engine/fuel_delivery_method",
    "/engineering/piston_engine/piston_configuration", "/engineering/piston_engine/valvetrain_configuration", "/engineering/power_plug_standard/plug_type", "/event/disaster/type_of_disaster", "/event/speech_or_presentation/type_or_format_of_presentation", "/exhibitions/exhibition/exhibition_types", "/fashion/textile/weave", "/fictional_universe/fictional_setting/setting_type", "/film/film/film_format", "/food/beer/beer_style", "/food/beer_style/bjcp_style_category", "/food/cheese/texture", "/food/dish/type_of_dish1",
    "/food/drinking_establishment/drinking_establishment_type", "/food/tea/tea_type", "/food/wine_style/wine_types", "/geography/geographical_feature/category", "/geography/glacier/glacier_type", "/geography/lake/lake_type", "/geography/mountain/listings", "/geography/mountain/mountain_type", "/geography/waterfall/waterfall_type", "/government/government_office_or_title/category", "/government/government_position_held/basic_title", "/interests/collectable_item/collection_category", "/internet/top_level_domain/domain_type",
    "/language/conlang/conlang_type", "/language/language_writing_system/type_of_writing", "/law/us_patent/international_classification", "/law/us_patent/us_classification_category", "/law/us_patent/us_patent_type", "/location/administrative_division_capital_relationship/capital_type", "/location/country/form_of_government", "/location/location_symbol_relationship/Kind_of_symbol", "/martial_arts/martial_art/category", "/medicine/cancer_center/cancer_center_type", "/medicine/drug/drug_class", "/medicine/drug/mechanism_of_action",
    "/medicine/drug_formulation/dosage_form", "/medicine/drug_formulation/drug_category", "/medicine/hospital_ownership/ownership_status", "/medicine/infectious_disease/infectious_agent_type", "/medicine/medical_trial/design", "/medicine/medical_trial/phase", "/medicine/medical_trial/type_of_trial", "/meteorology/cloud/classification", "/meteorology/tropical_cyclone/category", "/metropolitan_transit/transit_line/service_type", "/military/military_unit/unit_size", "/music/album/release_type", "/music/composition/form",
    "/music/opera_singer/voice_type", "/music/release/format", "/organization/organization/legal_structure", "/organization/organization/organization_type", "/people/person/ethnicity", "/people/person/gender", "/physics/particle/family", "/physics/particle/generation", "/protected_sites/natural_or_cultural_site_designation/categories", "/protected_sites/natural_or_cultural_site_listing/designation", "/protected_sites/protected_site/iucn_category", "/rail/locomotive_class/gauge", "/rail/railway_gauge_relationship/gauge",
    "/rail/railway_type_relationship/railway_type", "/rail/steam_locomotive_class/fuel_type", "/rail/steam_locomotive_class/wheel_configuration", "/religion/place_of_worship/religion", "/religion/place_of_worship/type_of_place_of_worship", "/religion/place_of_worship_historical_use/religion", "/religion/religious_leadership_jurisdiction/size_or_type", "/royalty/chivalric_rank/gender", "/royalty/noble_rank/gender", "/royalty/order_of_chivalry/category", "/skiing/lift_tenure/lift_type", "/skiing/ski_run/rating", "/spaceflight/bipropellant_rocket_engine/engine_cycle",
    "/spaceflight/rocket/rocket_function", "/spaceflight/satellite/primary_use", "/sports/boxer/weight_division", "/time/holiday/type_of_holiday", "/transportation/bridge/bridge_type", "/travel/accommodation/accommodation_type", "/visual_art/artwork/art_form", "/wine/wine/color", "/wine/wine/wine_style", "/wine/wine/wine_type", "/zoos/zoo/category", "/people/person/profession", "/soccer/football_player/position_s", "/american_football/football_historical_roster_position/position_s", "/american_football/football_player/position_s",
    "/american_football/football_roster_position/position", "/baseball/baseball_player/position_s", "/baseball/baseball_roster_position/position", "/basketball/basketball_player/position_s", "/basketball/basketball_roster_position/position", "/ice_hockey/hockey_player/hockey_position", "/ice_hockey/hockey_roster_position/position", "/soccer/football_player/position_s", "/soccer/football_roster_position/position"
    ]



  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return data;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }

  return data;

})()