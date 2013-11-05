/*! freebase 
 by @spencermountain
 2013-11-04 */
/*! freebase.js 
 by @spencermountain
	https://github.com/spencermountain/Freebase.js
 2013-03-21 
*/

(function( $ ) {
  $.freebase = (function() {
//client-side and serverside http methods, using jquery and micheal/request respectively
var http = (function() {

  var http = {}

  //client-side environment
  if (typeof window != 'undefined' && window.screen) {

    http.get = function(url, callback) {
      callback = callback || defaultcallback;
      $.get(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.jsonp = function(url, callback) {
      callback = callback || defaultcallback;
      $.getJSON(url, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    http.post = function(url, data, callback) {
      callback = callback || defaultcallback;
      $.post(url, data, function(result) {
        callback(trytoparse(result))
      }).fail(function(e) {
        callback(e.statusText || "error")
      });
    }

    function defaultcallback(s) {
      console.log(s);
      $('body').append(JSON.stringify(s));
    }
  }
  //server-side environment
  else if (typeof module !== 'undefined' && module.exports) {
    var request = require('request');

    http.get = function(url, callback) {
      callback = callback || console.log;
      request({
        uri: url
      }, function(error, response, body) {
        callback(trytoparse(body))
      })
    }

    http.post = function(url, data, callback) {
      callback = callback || console.log;
      if (typeof data == 'object') {
        data = JSON.stringify(data);
      }
      request({
        url: 'http://api.freebase.com/api/service/mqlread',
        method: 'POST',
        body: data
      }, function(err, res, body) {
        callback(trytoparse(body));
      });
    }

  }

  function trytoparse(d) {
    try {
      return JSON.parse(d);
    } catch (e) {
      return d;
    }
  }

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return http;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = http;
  }

  return http;

})()

var data=(function(){


var data = {
	"kill": ["/music/track", "/music/release_track", "/tv/tv_episode", "/music/recording", "/music/composition", "/book/book_edition"],
	"boring": ["/type/object/attribution", "/type/object/key", "/type/object/mid", "/common/topic/notable_properties", "/type/object/guid", "/type/object/type", "/type/object/id", "/type/object/creator", "/type/object/timestamp", "/type/object/permission", "/common/topic/alias", "/common/topic/article", "/common/topic/image", "/common/topic/notable_for", "/common/topic/notable_types", "/common/topic/official_website", "/common/topic/topic_equivalent_webpage", "/common/topic/topical_webpage", "/travel/travel_destination_monthly_climate/month",
		"/location/religion_percentage/religion"],
	"sentence_grammars": [],
	"plural_types": ["/music/instrument", "/business/product_category", "/biology/animal", "/aviation/aircraft_type", "/base/aareas/schema/administrative_area_type", "/user/spencermountain/default_domain/type_of_music_group", "/geography/geographical_feature_category", "/award/award_discipline", "/fashion/garment", "/interests/collection_category", "/organization/organization_type", "/geology/rock_type",
		"/sports/sports_equipment", "/fictional_universe/fictional_organization_type", "/user/jamie/default_domain/retail_category", "/base/localfood/produce", "/base/disaster2/type_of_injury", "/architecture/type_of_museum", "/automotive/engine_type", "/travel/accommodation_feature", "/transportation/bridge_type", "/food/type_of_dish", "/automotive/automotive_class", "/geography/mountain_type", "/exhibitions/type_of_exhibition", "/user/alecf/recreation/park_feature", "/event/disaster_type", "/meteorology/cloud", "/base/events/type_of_festival",
		"/american_football/football_position", "/base/piercings/piercing_location", "/religion/type_of_place_of_worship", "/base/birdinfo/type_of_diet", "/astronomy/type_of_planetographic_feature", "/base/forts/type_of_fort", "/travel/accommodation_type", "/base/crime/lawyer_type", "/base/argumentmaps/type_of_joke", "/base/events/type_of_performance", "/event/type_of_public_presentation", "/user/alexander/toys/toy_type", "/user/robert/mobile_phones/input_interface", "/baseball/baseball_position", "/theater/theater_production_staff_role",
		"/soccer/football_position", "/music/voice", "/base/disaster2/type_of_injury_causing_event", "/base/services/exercise_facilities", "/conferences/type_of_conference", "/base/ecology/type_of_ecosystem", "/bicycles/bicycle_type", "/basketball/basketball_position", "/base/movietheatres/type_of_movie_theatre_cinema", "/base/disaster2/type_of_automobile_accident", "/ice_hockey/hockey_position", "/base/fires/type_of_fire", "/base/crime/type_of_criminal_organization", "/base/skateboarding/type_of_skateboarding_obstacle",
		"/spaceflight/satellite_type", "/base/represent/type_of_agent", "/user/rcheramy/default_domain/fruit", "/user/rcheramy/default_domain/food", "/biology/organism_classification", "/business/job_title", "/medicine/anatomical_structure", "/people/profession", "/fictional_universe/character_species", "/user/rcheramy/default_domain/hockey_team", "/ice_hockey/hockey_team", "/sports/sports_team", "/sports/professional_sports_team", "/base/events/event_presenting_organisation", "/film/film_genre", "/music/compositional_form",
		"/medicine/drug_class", "/geography/lake_type", "/user/akatenev/weapons/weapon", "/user/spencermountain/default_domain/stock_character", "/base/folklore/mythical_creature"],
	"category_like": ["/american_football/football_position/players", "/architecture/architectural_style/architects", "/baseball/baseball_position/players", "/basketball/basketball_position/players", "/basketball/basketball_roster_position/player", "/business/competitive_space_mediator/company", "/business/industry/companies", "/business/market_share/company",
		"/comic_strips/comic_strip_creator_duration/creator_of_strip", "/dining/cuisine/chefs", "/dining/cuisine/restaurant", "/education/education/student", "/education/field_of_study/academic_departments", "/education/field_of_study/academics_in_this_field", "/film/film_film_company_relationship/film_company", "/food/diet/followers", "/ice_hockey/hockey_position/players", "/interests/hobby/people_with_this_hobby", "/interests/interest/people_with_this_interest", "/martial_arts/martial_art/well_known_practitioner",
		"/medicine/medical_specialty/hospitals_with_this_specialty", "/medicine/medical_specialty/physicians_with_this_specialty", "/music/genre/artists", "/music/group_membership/member", "/music/recording_contribution/contributor", "/music/track_contribution/contributor", "/olympics/olympic_athlete_affiliation/athlete", "/opera/opera_designer_gig/designer", "/opera/opera_production_staff_gig/staff_member", "/organization/club_interest/clubs", "/organization/leadership/person", "/organization/organization_board_membership/member",
		"/organization/organization_sector/organizations_in_this_sector", "/people/profession/people_with_this_profession", "/projects/project_participation/participant", "/religion/religion/organizations", "/soccer/football_position/players", "/sports/pro_sports_played/athlete", "/sports/sport/leagues", "/sports/sport/officials", "/sports/sport/team_coaches", "/sports/sport/teams", "/sports/sports_team_roster/player", "/theater/theater_designer_gig/designer", "/theater/theater_production_staff_gig/staff_member", "/tv/tv_crew_gig/crewmember",
		"/tv/tv_producer_episode_credit/producer", "/tv/tv_producer_term/producer", "/tv/tv_regular_personal_appearance/person", "/visual_art/visual_art_form/artists", "/government/form_of_government/countries", "/people/ethnicity/people", "/fictional_universe/character_gender", "/fictional_universe/fictional_character/ethnicity", "/architecture/structure/architectural_style", "/book/book/genre", "/book/magazine/genre", "/book/short_story/genre", "/book/written_work/school_or_movement", "/broadcast/content/genre", "/broadcast/radio_station/format",
		"/comic_books/comic_book_series/genre", "/comic_books/comic_book_story/genre", "/comic_strips/comic_strip/genre", "/computer/software/software_genre", "/cvg/computer_videogame/cvg_genre", "/film/film/genre", "/food/dish/cuisine", "/games/game/genre", "/internet/website/category", "/media_common/netflix_title/netflix_genres", "/music/album/genre", "/music/music_video/music_video_genre", "/opera/opera/genre", "/theater/play/genre", "/tv/tv_program/genre", "/visual_art/artwork/art_genre", "/visual_art/artwork/period_or_movement",
		"/automotive/model/model_years", "/automotive/model_year/examples", "/aviation/aircraft_model/aircraft", "/award/recurring_competition/individual_competitions", "/conferences/conference_series/conference", "/cricket/cricket_series/series_events", "/cricket/cricket_tournament/events", "/film/film_festival/individual_festivals", "/food/dish/recipes", "/rail/locomotive_class/locomotives_of_this_class", "/sports/sports_championship/events", "/sports/tournament_event/competitions", "/time/recurring_event/instances",
		"/fictional_universe/character_occupation/characters_with_this_occupation"],
	"related_properties": ["/influence/influence_node/influenced_by", "/location/location/adjoin_s", "/influence/influence_node/influenced", "/location/location/coterminous_with", "/location/location/near", "/time/event/included_in_event", "/time/event/includes_event", "/film/film/subjects", "/film/film/sequel", "/film/film/prequel", "/film/film/directed_by", "/film/film/starring", "/book/written_work/previous_in_series", "/book/written_work/next_in_series",
		"/book/written_work/subjects", "/visual_art/artwork/art_subject", "/visual_art/artwork/belongs_to_series", "/education/educational_institution/subsidiary_or_constituent_schools", "/education/educational_institution/parent_institution", "/organization/organization/sectors", "/organization/organization/spun_off_from", "/organization/organization/spin_offs", "/organization/organization/parent", "/organization/organization/child", "/biology/organism_classification/higher_classification", "/biology/organism_classification/lower_classifications",
		"/biology/organism_classification/child_classifications", "/biology/organism_classification/parent_classifications", "/sports/sports_facility/teams", "/sports/sports_league/championship", "/sports/sport/leagues", "/sports/sports_team/arena_stadium", "/sports/sports_team/location", "/sports/sports_team_location/teams", "/government/political_party/ideology", "/government/political_district/elections", "/government/election/winner", "/music/track/artist", "/time/recurring_event/instances", "/people/profession/specializations",
		"/people/profession/specialization_of", "/music/artist/label", "/music/artist/album", "/music/release/label", "/music/release/album", "/music/album/artist", "/music/musical_group/member", "/music/producer/releases_produced", "/base/onephylogeny/type_of_thing/includes", "/base/onephylogeny/type_of_thing/included_in", "/location/country/capital", "/location/country/form_of_government", "/location/country/currency_used", "/location/country/national_anthem", "/aviation/airport/serves", "/architecture/structure/architect",
		"/geography/lake/cities", "/geography/lake/outflow", "/geography/lake/inflow", "/olympics/olympic_games/host_city", "/olympics/olympic_host_city", "/business/employment_tenure/company", "/film/performance/film", "/tv/regular_tv_appearance/series", "/people/marriage/spouse", "/education/education/specialization", "/education/education/major_field_of_study", "/location/adjoining_relationship/adjoins", "/music/group_membership/group", "/celebrities/friendship/friend", "/base/popstra/friendship/participant", "/people/person/parents",
		"/influence/influence_node/peers", "/people/person/children", "/people/sibling_relationship/sibling", "/location/location/contains"],
	"definate_articles": ["/geography/mountain_range", "/location/region", "/royalty/noble_title", "/user/pak21/default_domain/tectonic_plate", "/education/university", "/education/department", "/religion/religious_organization", "/user/robinboast/default_domain/historical_period", "/travel/tourist_attraction", "/comic_books/comic_book_character", "/transportation/bridge", "/business/shopping_center",
		"/base/argumentmaps/intellectual_dispute", "/base/argumentmaps/argument", "/geography/island_group"],
	"properties": [],
	"is_a": ["/amusement_parks/ride/ride_type", "/amusement_parks/roller_coaster/propulsion", "/amusement_parks/roller_coaster/train_configuration", "/architecture/building/building_function", "/architecture/museum/type_of_museum", "/astronomy/asteroid/spectral_type", "/astronomy/celestial_object/category", "/astronomy/extraterrestrial_location/type_of_planetographic_feature", "/astronomy/galaxy/galaxy_classification_hubble",
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
		"/american_football/football_roster_position/position", "/baseball/baseball_player/position_s", "/baseball/baseball_roster_position/position", "/basketball/basketball_player/position_s", "/basketball/basketball_roster_position/position", "/ice_hockey/hockey_player/hockey_position", "/ice_hockey/hockey_roster_position/position", "/soccer/football_player/position_s", "/soccer/football_roster_position/position"],
   "metaschema": [{
                "name": "HasPlaceOfOrigin",
                "search": "origin",
                "id": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
        }, {
                "name": "Portrayed",
                "search": "portrayed",
                "id": "/base/fbontology/metaschema/predicate_id/portrayed"
        }, {
                "name": "PortrayedBy",
                "search": "portrayed_by",
                "id": "/base/fbontology/metaschema/predicate_id/portrayedby"
        }, {
                "name": "HasCategory",
                "search": "category",
                "id": "/base/fbontology/metaschema/predicate_id/hascategory"
        }, {
                "name": "Administers",
                "search": "administers",
                "id": "/base/fbontology/metaschema/predicate_id/administers"
        }, {
                "name": "AdministeredBy",
                "search": "administered_by",
                "id": "/base/fbontology/metaschema/predicate_id/administeredby"
        }, {
                "name": "OccursIn",
                "search": "occurs_in",
                "id": "/base/fbontology/metaschema/predicate_id/occursin"
        }, {
                "name": "Produced",
                "search": "produced",
                "id": "/base/fbontology/metaschema/predicate_id/produced"
        }, {
                "name": "ProducedBy",
                "search": "produced_by",
                "id": "/base/fbontology/metaschema/predicate_id/producedby"
        }, {
                "name": "HasLocation",
                "search": "location",
                "id": "/base/fbontology/metaschema/predicate_id/haslocation"
        }, {
                "name": "HasTitle",
                "search": "title",
                "id": "/base/fbontology/metaschema/predicate_id/hastitle"
        }, {
                "name": "HasPart",
                "search": "part",
                "id": "/base/fbontology/metaschema/predicate_id/haspart"
        }, {
                "name": "PartOf",
                "search": "part_of",
                "id": "/base/fbontology/metaschema/predicate_id/partof"
        }, {
                "name": "ComposedOf",
                "search": "made_of",
                "id": "/base/fbontology/metaschema/predicate_id/composedof"
        }, {
                "name": "ParticipatedIn",
                "search": "participated_in",
                "id": "/base/fbontology/metaschema/predicate_id/participatedin"
        }, {
                "name": "HasParticipant",
                "search": "participant",
                "id": "/base/fbontology/metaschema/predicate_id/hasparticipant"
        }, {
                "name": "Discovered",
                "search": "discovered",
                "id": "/base/fbontology/metaschema/predicate_id/discovered"
        }, {
                "name": "DiscoveredBy",
                "search": "discovered_by",
                "id": "/base/fbontology/metaschema/predicate_id/discoveredby"
        }, {
                "name": "HasStatus",
                "search": "status",
                "id": "/base/fbontology/metaschema/predicate_id/hasstatus"
        }, {
                "name": "PractitionerOf",
                "search": "practitioner_of",
                "id": "/base/fbontology/metaschema/predicate_id/practitionerof"
        }, {
                "name": "HasPractitioner",
                "search": "practitioner",
                "id": "/base/fbontology/metaschema/predicate_id/haspractitioner"
        }, {
                "name": "HasServiceArea",
                "search": "service_area",
                "id": "/base/fbontology/metaschema/predicate_id/hasservicearea"
        }, {
                "name": "HasChild",
                "search": "child",
                "id": "/base/fbontology/metaschema/predicate_id/haschild"
        }, {
                "name": "HasParent",
                "search": "parent",
                "id": "/base/fbontology/metaschema/predicate_id/hasparent"
        }, {
                "name": "HasPublication",
                "search": "publication",
                "id": "/base/fbontology/metaschema/predicate_id/haspublication"
        }, {
                "name": "PublicationOf",
                "search": "publication_of",
                "id": "/base/fbontology/metaschema/predicate_id/publicationof"
        }, {
                "name": "MemberOf",
                "search": "member_of",
                "id": "/base/fbontology/metaschema/predicate_id/memberof"
        }, {
                "name": "LeaderOf",
                "search": "leader_of",
                "id": "/base/fbontology/metaschema/predicate_id/leaderof"
        }, {
                "name": "HasLeader",
                "search": "leader",
                "id": "/base/fbontology/metaschema/predicate_id/hasleader"
        }, {
                "name": "HasOwner",
                "search": "owner",
                "id": "/base/fbontology/metaschema/predicate_id/hasowner"
        }, {
                "name": "Owns",
                "search": "owns",
                "id": "/base/fbontology/metaschema/predicate_id/owns"
        }, {
                "name": "PeerOf",
                "search": "peer_of",
                "id": "/base/fbontology/metaschema/predicate_id/peerof"
        }, {
                "name": "ExhibitedAt",
                "search": "exhibited_at",
                "id": "/base/fbontology/metaschema/predicate_id/exhibitedat"
        }, {
                "name": "Exhibited",
                "search": "exhibited",
                "id": "/base/fbontology/metaschema/predicate_id/exhibited"
        }, {
                "name": "DistributedBy",
                "search": "distributed_by",
                "id": "/base/fbontology/metaschema/predicate_id/distributedby"
        }, {
                "name": "HasName",
                "search": "name",
                "id": "/base/fbontology/metaschema/predicate_id/hasname"
        }, {
                "name": "SuperclassOf",
                "search": "superclass_of",
                "id": "/base/fbontology/metaschema/predicate_id/superclassof"
        }, {
                "name": "SubclassOf",
                "search": "subclass_of",
                "id": "/base/fbontology/metaschema/predicate_id/subclassof"
        }, {
                "name": "TookPlaceAt",
                "search": "tookplace_at",
                "id": "/base/fbontology/metaschema/predicate_id/tookplaceat"
        }, {
                "name": "HasFictionalRelationship",
                "search": "fiction_link",
                "id": "/base/fbontology/metaschema/predicate_id/hasfictionalrelationship"
        }, {
                "name": "HasGenre",
                "search": "genre",
                "id": "/base/fbontology/metaschema/predicate_id/hasgenre"
        }, {
                "name": "SucceededBy",
                "search": "succeeded_by",
                "id": "/base/fbontology/metaschema/predicate_id/succeededby"
        }, {
                "name": "Succeeds",
                "search": "succeeds",
                "id": "/base/fbontology/metaschema/predicate_id/succeeds"
        }, {
                "name": "UsePermittedBy",
                "search": "use_permitted_by",
                "id": "/base/fbontology/metaschema/predicate_id/usepermittedby"
        }, {
                "name": "PermitsUseOf",
                "search": "permits_use_of",
                "id": "/base/fbontology/metaschema/predicate_id/permitsuseof"
        }, {
                "name": "ContributedTo",
                "search": "contributed_to",
                "id": "/base/fbontology/metaschema/predicate_id/contributedto"
        }, {
                "name": "HasContributor",
                "search": "contributor",
                "id": "/base/fbontology/metaschema/predicate_id/hascontributor"
        }, {
                "name": "HasIdentifier",
                "search": "name",
                "id": "/base/fbontology/metaschema/predicate_id/hasidentifier"
        }, {
                "name": "Identifies",
                "search": "identifies",
                "id": "/base/fbontology/metaschema/predicate_id/identifies"
        }, {
                "name": "HasCenter",
                "search": "center",
                "id": "/base/fbontology/metaschema/predicate_id/hascenter"
        }, {
                "name": "CenterFor",
                "search": "center_for",
                "id": "/base/fbontology/metaschema/predicate_id/centerfor"
        }, {
                "name": "HasCharacter",
                "search": "character",
                "id": "/base/fbontology/metaschema/predicate_id/hascharacter"
        }, {
                "name": "AppearsIn",
                "search": "appears_in",
                "id": "/base/fbontology/metaschema/predicate_id/appearsin"
        }, {
                "name": "BroaderThan",
                "search": "broader_than",
                "id": "/base/fbontology/metaschema/predicate_id/broaderthan"
        }, {
                "name": "NarrowerThan",
                "search": "narrower_than",
                "id": "/base/fbontology/metaschema/predicate_id/narrowerthan"
        }, {
                "name": "ExpressedBy",
                "search": "expressed_by",
                "id": "/base/fbontology/metaschema/predicate_id/expressedby"
        }, {
                "name": "HasCertification",
                "search": "certification",
                "id": "/base/fbontology/metaschema/predicate_id/hascertification"
        }, {
                "name": "CertificationOf",
                "search": "certification_of",
                "id": "/base/fbontology/metaschema/predicate_id/certificationof"
        }, {
                "name": "HasPreceedingWork",
                "search": "preceeding",
                "id": "/base/fbontology/metaschema/predicate_id/haspreceedingwork"
        }, {
                "name": "HasSubsequentWork",
                "search": "subsequent",
                "id": "/base/fbontology/metaschema/predicate_id/hassubsequentwork"
        }, {
                "name": "Created",
                "search": "created",
                "id": "/base/fbontology/metaschema/predicate_id/created"
        }, {
                "name": "CreatedBy",
                "search": "created_by",
                "id": "/base/fbontology/metaschema/predicate_id/createdby"
        }, {
                "name": "HasAdaptation",
                "search": "adaptation",
                "id": "/base/fbontology/metaschema/predicate_id/hasadaptation"
        }, {
                "name": "AdaptationOf",
                "search": "adaptation_of",
                "id": "/base/fbontology/metaschema/predicate_id/adaptationof"
        }, {
                "name": "HasMeasurement",
                "search": "number",
                "id": "/base/fbontology/metaschema/predicate_id/hasmeasurement"
        }, {
                "name": "HasAbstraction",
                "search": "abstraction",
                "id": "/base/fbontology/metaschema/predicate_id/hasabstraction"
        }, {
                "name": "AbstractionOf",
                "search": "abstraction_of",
                "id": "/base/fbontology/metaschema/predicate_id/abstractionof"
        }, {
                "name": "HasMeansOfDemise",
                "search": "means_of_demise",
                "id": "/base/fbontology/metaschema/predicate_id/hasmeansofdemise"
        }, {
                "name": "HasSubject",
                "search": "subject",
                "id": "/base/fbontology/metaschema/predicate_id/hassubject"
        }]


};

  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return data;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = {data:data};
  }

  return data;

})()
//if nodejs, load these modules
if (typeof module !== 'undefined' && module.exports) {
  var _ = require('underscore');
  var async = require('async');
  var data = require('./data.js').data;
  var http = require('./http.js');
}

var fns= (function(){

var async_max = 10; //the hardest we will ever concurrently hit freebase

//non-front-facing methods that are used for the freebase javascript package

var fns = {}

var globals = {
  host: 'https://www.googleapis.com/freebase/v1/',
  image_host: "https://usercontent.googleapis.com/freebase/v1/image",
  wikipedia_host: 'http://en.wikipedia.org/w/api.php'
}

fns.isarray=function(x){
    return toString.call(x) == '[object Array]';
}

fns.isobject=function(obj){
    return obj === Object(obj);
  }

  fns.flatten = function(input, shallow, output) {
    input.each(function(value) {
      if (fns.isarray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  fns.last=function(arr){
    return arr[arr.length]
  }

  fns.compact=function(arr){
    return arr.filter(function(v){return v})
  }

//compact even empty objects
fns.compact_strong = function(arr) {
  return _.unique(_.compact(arr)).filter(function(v) {
    return _.isEmpty(v) == false
  })
}


fns.settle_params = function(params, method, defaults) {
  var o = {
    valid: false,
    q: params[0],
    options: params[1] || {},
    callback: params[2] || console.log,
    defaults: defaults || {},
    method: method || ''
  }
  //flexible parameters
  if (typeof o.options == "function") {
    o.callback = o.options;
    o.options = {};
  }
  //fancy callback wrapper
  if (o.options.verbose) {
    var tmp = o.callback
    o.callback = function(r) {
      return tmp(r)
    }
  }
  //handle an array
  if (fns.isarray(o.q)) {
    if (o.q.length > 1) {
      o.q = fns.compact_strong(o.q);
      o.valid = true;
      o.array = true;
      return o
    } else {
      o.q = o.q[0]; //just use the first element
    }
  }
  //if its a freebase-type object
  if (typeof o.q =="object") {
    o.q = o.q.id || o.q.mid || o.q.name;
  }
  //make sure we're sane
  if (typeof o.q != "string" || typeof o.options != "object" || typeof o.callback != "function") {
    return o;
  }
  //handle an id
  if (o.q.match(/\/.*?\/.*?/)) {
    o.is_id = true;
  }
  //set default options
  for (var i in o.defaults) {
    o.options[i] = o.options[i] || o.defaults[i];
  }
  //remove whitespace
  o.q = o.q.replace(/  /, ' ');
  o.q = o.q.replace(/^\s+|\s+$/, '');
  //if it's a url, clean it up
  if (o.q.match(/^(https?:\/\/|www\.)/)) {
    o.q = o.q.replace(/\/$/, '');
    o.q = o.q.replace(/^https/, 'http');
    o.url = true;
  }
  o.valid = true;
  return o
}

//sort by frequency
fns.topk = function(myArray, length) {
  var newArray = [];
  length = length || 1
  var freq = {};
  //Count Frequency of Occurances
  var i = myArray.length - 1;
  for (var i; i > -1; i--) {
    var value = myArray[i];
    freq[value] == null ? freq[value] = 1 : freq[value]++;
  }
  //convert to sortable array
  for (var value in freq) {
    newArray.push(value);
  }
  return newArray.sort(function(a, b) {
    return freq[b] - freq[a];
  }).map(function(v) {
    return {
      value: v,
      count: freq[v],
      percentage: ((freq[v] / length) * 100).toFixed(2)
    }
  });
}

fns.percentage = function(a, b) {
  return parseInt((a / b) * 100)
}


//kill the freebase internal-properties that don't feel graphy
fns.kill_boring = function(obj) {
  if (!obj) {
    return {}
  }
  data.boring.forEach(function(v) {
    delete obj[v]
  })
  return obj
}

//****************************
fns.parse_topic_api = function(properties, options) {
  var out = [];
  properties = fns.kill_boring(properties)
  Object.keys(properties).forEach(function(key) {
    var v = properties[key];
    //add topics
    if (v.valuetype == "object") {
      v.values = v.values.map(function(s) {
        s.property = key;
        return s
      })
      out = out.concat(v.values)
    }
    //add the topics from cvt values in the same manner
    if (v.valuetype == "compound") {
      v.values.forEach(function(c) {
        c.property = fns.kill_boring(c.property);
        Object.keys(c.property).forEach(function(key2) {
          if (c.property[key2].valuetype == "object") {
            c.property[key2].values = c.property[key2].values.map(function(s) {
              s.property = [key, key2];
              return s
            })
            out = out.concat(c.property[key2].values)
          }
        })
      })
    }
  })
  out = out.map(function(o) {
    return {
      name: o.text,
      id: o.id,
      property: o.property
    }
  })
  out = out.map(function(o) {
    if (fns.isarray(o.property)) {
      o.property = o.property.join('');
    }
    return o
  })
  return out;
}

///////**************
//lookup metaschema predicate matches offline..
fns.metaschema_lookup = function(property) {
  property = property.toLowerCase();
  property = property.replace(/\W(is|was|are|will be|has been)\W/, ' ');
  property = property.replace(/  /g, ' ');
  property = property.replace(/_/g, ' ');
  property = property.replace(/^\s+|\s+$/, '');
  var candidate_properties = data.metaschema.filter(function(v) {
    v.aliases = v.aliases || []
    return v.id == property || v.name.toLowerCase() == property || fns.isin(property, v.aliases) || v.search.replace(/_/g, ' ') == property
  })[0]
  candidate_properties = candidate_properties || {}
  return candidate_properties.search;
}
//console.log(metaschema_lookup('built with'))

/////*****************************
// fns.list_category_like=function(q, options, callback){
//   callback=callback||console.log;
//   if(!q){return callback({})}
//   options=options||{};
//   q=fns.singularize(q);
//   freebase.topic(q, options, function(r){
//     if(!r || !r.property || !_.isObject(r.property) ){return callback([])}
//     var all=Object.keys(r.property).filter(function(v){
//       return fns.isin(v, data.category_like)
//     }).map(function(p){
//       //add the property
//       r.property[p].values=r.property[p].values.map(function(v){
//         v.property=p;
//         return v;
//       })
//       return r.property[p].values
//     })
//     all=_.flatten(all);
//     return callback(all)
//   })
// }
//list_category_like("city")

//originally by david huynh 2010, http://www.freebase.com/appeditor/#!path=//cubed.dfhuynh.user.dev/index
//Algorithm is adopted from
//http://www.csse.monash.edu.au/~damian/papers/HTML/Plurals.html
fns.singularize = function(text) {
  if (text.match(' ')) { //multiple words
    var words = text.split(' ');
    var last = words[words.length - 1];
    var firsts = words.slice(0, -1);
    return firsts.join(" ") + ' ' + fns.singularize(last);
  }
  var prepositions = {
    "about": 1,
    "above": 1,
    "across": 1,
    "after": 1,
    "against": 1,
    "along": 1,
    "among": 1,
    "around": 1,
    "at": 1,
    "before": 1,
    "behind": 1,
    "below": 1,
    "beneath": 1,
    "beside": 1,
    "between": 1,
    "beyond": 1,
    "but": 1,
    "by": 1,
    "despite": 1,
    "down": 1,
    "during": 1,
    "except": 1,
    "for": 1,
    "from": 1,
    "in": 1,
    "inside": 1,
    "into": 1,
    "like": 1,
    "near": 1,
    "of": 1,
    "off": 1,
    "on": 1,
    "onto": 1,
    "out": 1,
    "outside": 1,
    "over": 1,
    "past": 1,
    "since": 1,
    "through": 1,
    "throughout": 1,
    "till": 1,
    "to": 1,
    "toward": 1,
    "under": 1,
    "underneath": 1,
    "until": 1,
    "up": 1,
    "upon": 1,
    "with": 1,
    "within": 1,
    "without": 1
  };
  var userDefinedNouns = [{
    "p": "people",
    "s": "person"
  }, {
    "p": "tornadoes",
    "s": "tornado"
  }, {
    "p": "churches",
    "s": "church"
  }, {
    "p": "countries",
    "s": "country"
  }, {
    "p": "cities",
    "s": "city"
  }, {
    "p": "companies",
    "s": "company"
  }, {
    "p": "monkies",
    "s": "monkey"
  }, {
    "p": "donkies",
    "s": "donkey"
  }, {
    "p": "mysteries",
    "s": "mystery"
  }, {
    "p": "authors",
    "s": "author"
  }];

  // Table A.1
  var irregularNouns = {
    "beef": {
      anglicized: "beefs",
      classical: "beeves"
    },
    "brother": {
      anglicized: "brothers",
      classical: "brethren"
    },
    "child": {
      anglicized: null,
      classical: "children"
    },
    "cow": {
      anglicized: null,
      classical: "kine"
    },
    "ephemeris": {
      anglicized: null,
      classical: "ephemerides"
    },
    "genie": {
      anglicized: null,
      classical: "genii"
    },
    "money": {
      anglicized: "moneys",
      classical: "monies"
    },
    "mongoose": {
      anglicized: "mongooses",
      classical: null
    },
    "mythos": {
      anglicized: null,
      classical: "mythoi"
    },
    "octopus": {
      anglicized: "octopuses",
      classical: "octopodes"
    },
    "ox": {
      anglicized: null,
      classical: "oxen"
    },
    "soliloquy": {
      anglicized: "soliloquies",
      classical: null
    },
    "trilby": {
      anglicized: "trilbys",
      classical: null
    }
  };

  var uninflectedSuffixes = ["fish", "ois", "sheep", "deer", "pox", "itis"];

  // Table A.2
  var uninflectedNouns = {
    "bison": 1,
    "flounder": 1,
    "pliers": 1,
    "bream": 1,
    "gallows": 1,
    "proceedings": 1,
    "breeches": 1,
    "graffiti": 1,
    "rabies": 1,
    "britches": 1,
    "headquarters": 1,
    "salmon": 1,
    "carp": 1,
    "herpes": 1,
    "scissors": 1,
    "chassis": 1,
    "high-jinks": 1,
    "sea-bass": 1,
    "seabass": 1,
    "clippers": 1,
    "homework": 1,
    "series": 1,
    "cod": 1,
    "innings": 1,
    "shears": 1,
    "contretemps": 1,
    "jackanapes": 1,
    "species": 1,
    "corps": 1,
    "mackerel": 1,
    "swine": 1,
    "debris": 1,
    "measles": 1,
    "trout": 1,
    "diabetes": 1,
    "mews": 1,
    "tuna": 1,
    "djinn": 1,
    "mumps": 1,
    "whiting": 1,
    "eland": 1,
    "news": 1,
    "wildebeest": 1,
    "elk": 1,
    "pincers": 1,

    "moose": 1,
    "shrimp": 1,
    "hoi polloi": 1,
    "riffraff": 1,
    "rabble": 1
  };
  var inflectionCategories = [{ // Table A.10
    from: "a",
    to: "ae",
    words: ["alumna", "alga", "vertebra"]
  }, {
    // Table A.11
    from: "a",
    anglicized: "as",
    classical: "ae",
    words: ["abscissa", "amoeba", "antenna", "aurora", "formula", "hydra", "hyperbola", "lacuna", "medusa", "nebula", "nova", "parabola"]
  }, {
    // Table A.12
    from: "a",
    anglicized: "as",
    classical: "ata",
    words: ["anathema", "bema", "carcinoma", "charisma", "diploma", "dogma", "drama", "edema", "enema", "enigma", "gumma", "lemma", "lymphoma", "magma", "melisma", "miasma", "oedema", "sarcoma", "schema", "soma", "stigma", "stoma", "trauma"]
  }, {
    // Table A.13
    from: "en",
    anglicized: "ens",
    classical: "ina",
    words: ["stamen", "foramen", "lumen"]
  }, {
    // Table A.14
    from: "ex",
    to: "ices",
    words: ["codex", "murex", "silex"]
  }, {
    // Table A.15
    from: "ex",
    anglicized: "exes",
    classical: "ices",
    words: ["apex", "cortex", "index", "latex", "pontifex", "simplex", "vertex", "vortex"]
  }, {
    // Table A.16
    from: "is",
    anglicized: "ises",
    classical: "ides",
    words: ["iris", "clitoris"]
  }, {
    // Table A.17
    from: "o",
    to: "os",
    words: ["albino", "archipelago", "armadillo", "commando", "ditto", "dynamo", "embryo", "fiasco", "generalissimo", "ghetto", "guano", "inferno", "jumbo", "lingo", "lumbago", "magneto", "manifesto", "medico", "octavo", "photo", "pro", "quarto", "rhino", "stylo"]
  }, {
    // Table A.18
    from: "o",
    anglicized: "os",
    classical: "i",
    words: ["alto", "basso", "canto", "contralto", "crescendo", "solo", "soprano", "tempo"]
  }, {
    // Table A.19
    from: "on",
    to: "a",
    words: ["aphelion", "asyndeton", "criterion", "hyperbaton", "noumenon", "organon", "perihelion", "phenomenon", "prolegomenon"]
  }, {
    // Table A.20
    from: "um",
    to: "a",
    words: ["agendum", "bacterium", "candelabrum", "datum", "desideratum", "erratum", "extremum", "stratum", "ovum"]
  }, {
    // Table A.21
    from: "um",
    anglicized: "ums",
    classical: "a",
    words: ["aquarium", "compendium", "consortium", "cranium", "curriculum", "dictum", "emporium", "enconium", "gymnasium", "honorarium", "interregnum", "lustrum", "maximum", "medium", "memorandum", "millenium", "minimum", "momentum", "optimum", "phylum", "quantum", "rostrum", "spectrum", "speculum", "stadium", "trapezium", "ultimatum", "vacuum", "velum"]
  }, {
    // Table A.22
    from: "us",
    anglicized: "uses",
    classical: "i",
    words: ["focus", "fungus", "genius", "incubus", "nimbus", "nucleolus", "radius", "stylus", "succubus", "torus", "umbilicus", "uterus"]
  }, {
    // Table A.23
    from: "us",
    anglicized: "uses",
    classical: "us",
    words: ["apparatus", "cantus", "coitus", "hiatus", "impetus", "nexus", "plexus", "prospectus", "sinus", "status"]
  }, {
    // Table A.24
    from: "",
    to: "i",
    words: ["afreet", "afrit", "efreet"]
  }, {
    // Table A.25
    from: "",
    to: "im",
    words: ["cherub", "goy", "geraph"]
  }];

  function suffix(text, s) {
    return text.length >= s.length && text.substring(text.length - s.length) == s;
  }

  function capIfCap(s, s2) {
    if (typeof s == "string") {
      var isCap = s2.charAt(0).toLowerCase() != s2.charAt(0);
      return isCap ? (s.charAt(0).toUpperCase() + s.substr(1)) : s;
    } else {
      var a = [];
      for (var i in s) {
        var s3 = s[i];
        a.push(capIfCap(s3, s2));
      }
      return a;
    }
  }

  function inflection(text, from, to) {
    return text.substring(0, text.length - from.length) + to;
  }

  function isOneOf(c, chars) {
    return chars.indexOf(c) >= 0;
  }

  function isVowel(c) {
    return isOneOf(c, "aeiou");
  }
  var text2 = text.toLowerCase();
  for (var o in userDefinedNouns) {
    if (userDefinedNouns[o].p == text) {
      return userDefinedNouns[o].s;
    }
  }
  for (var singular in irregularNouns) {
    var entry = irregularNouns[singular];
    if (entry.anglicized === text2 || entry.classical === text2) {
      return capIfCap(singular, text);
    }
  }
  for (var s in uninflectedSuffixes) {
    if (suffix(text2, s)) {
      return text;
    }
  }
  if (uninflectedNouns && uninflectedNouns[text2]) {
    return text;
  }
  var checkWords = function(from, to, words) {
    if (suffix(text, to)) {
      var prefix = text.substring(text.length - to.length);
      var text3 = prefix + entry.from;
      for (var word in words) {
        if (text3 === word) {
          return capIfCap(text3, text);
        }
      }
    }
    return null;
  }
  for (var e in inflectionCategories) {
    var entry = inflectionCategories[e];
    var text3 = ("to" in entry && checkWords(entry.from, entry.to, entry.words)) || ("anglicized" in entry && checkWords(entry.from, entry.anglicized, entry.words)) || ("classical" in entry && checkWords(entry.from, entry.classical, entry.words));

    if (text3 != null && typeof text3 == "string") {
      return text3;
    }
  }
  for (var prep in prepositions) {
    var n = text.indexOf(" " + prep + " ");
    if (n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if (r != null) {
        return r + " " + prep + " " + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
    n = text.indexOf("-" + prep + "-");
    if (n > 0) {
      var prefix = text.substring(0, n);
      var r = singularize(prefix);
      if (r != null) {
        return r + "-" + prep + "-" + text.substr(n + prep.length + 2);
      } else {
        return null;
      }
    }
  }
  var j = text.lastIndexOf(" ");
  if (j > 0) {
    var r = singularize(text.substring(j + 1));
    if (r != null) {
      return text.substring(0, j + 1) + r;
    } else {
      return null;
    }
  }
  if (suffix(text, "xes") || suffix(text, "ses")) {
    return text.substring(0, text.length - 2);
  }
  if (suffix(text, "s") && !suffix(text, "ss")) {
    return text.substring(0, text.length - 1);
  }
  return text;
}
//console.log(fns.singularize("george soros"));
//console.log(fns.singularize("mama cass"));


//by spencer kelly (@spencermountain)
fns.sentenceparser = function(text) {
  var tmp = text.split(/(\S.+?[.])(?=\s+|$)/g);
  var sentences = [];
  //join acronyms, titles
  for (var i in tmp) {
    if (tmp[i]) {
      tmp[i] = tmp[i].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
      //join common abbreviations + acronyms
      if (tmp[i].match(/(^| )(mr|dr|llb|md|bl|phd|ma|ba|mrs|miss|misses|mister|sir|esq|mstr|jr|sr|st|lit|inc|fl|ex|eg|jan|feb|mar|apr|jun|aug|sept?|oct|nov|dec)\. ?$/i) || tmp[i].match(/[ |\.][a-z]\.?$/i)) {
        tmp[parseInt(i, 10) + 1] = tmp[i] + ' ' + tmp[parseInt(i, 10) + 1];
      } else {
        sentences.push(tmp[i]);
        tmp[i] = '';
      }
    }
  }
  //cleanup afterwards
  var clean = [];
  for (var i2 in sentences) {
    sentences[i2] = sentences[i2].replace(/^\s+|\s+$/g, ''); //trim extra whitespace
    if (sentences[i2]) {
      clean.push(sentences[i2]);
    }
  }
  return clean;
}
//console.log(fns.sentenceparser('Dr. calm is me. lkj'))

//remove objects with a duplicate field from json
fns.json_unique = function(x, field) {
  var newArray = [];
  label: for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] && x[i] && newArray[j][field] == x[i][field]) continue label;
    }
    newArray[newArray.length] = x[i];
  }
  return newArray;
}



//handle rate-limited asynchronous freebase calls with a ending callback
fns.doit_async = function(params) {
  params.q = params.q || [];
  //pack the options in the array
  var packs = params.q.map(function(q, i) {
    return {
      q: q,
      options: params.options,
      method: params.method
    }
  });
  var unpack = function(pack, callback) {
    pack.method(pack.q, pack.options, function(result) {
      callback(null, result)
    })
  }
  async.mapLimit(packs, async_max, unpack, function(err, result) {
    return params.callback(result);
  })
}



//turn freebase's silly $00 encoding into unicode
fns.mql_unencode = function(x) {
  x = x.replace(/\$([0-9A-Fa-f]{4})/g, function(a, b) {
    return String.fromCharCode(parseInt(b, 16));
  });
  return x;
}
//console.log(fns.mql_unencode("K$00F6ppen_climate_classification"))


//turn an array into smaller groups of arrays
fns.groups_of = function(arr, group_length) {
  var all = []
  for (var i in arr) {
    if (i % group_length === 0) {
      all.push([arr[i]])
    } else {
      all[all.length - 1].push(arr[i])
    }
  }
  return all
}

fns.parseurl = function(str) {
  var o = {
    strictMode: false,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
      name: "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  },
  m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i = 14;
  while (i--) uri[o.key[i]] = m[i] || "";
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
}

//turn options object into get paramaters
fns.set_params = function(o) {
  var options = o;
  if (!options) {
    return ''
  }
  return Object.keys(options).map(function(v) {
    var val = options[v];
    if (fns.isarray(options[v]) || _.isObject(options[v])) {
      val = encodeURIComponent(JSON.stringify(options[v]));
    }
    return v + '=' + val
  }).join('&')
}

fns.clone = function(q) {
  return JSON.parse(JSON.stringify(q))
}

fns.softget=function(url, options, callback) {
  http.get(url, function(r){
    callback(r)
  })
}

fns.http = function(url, options, callback) {
  if (options.key) {
    url += '&key=' + options.key;
  }
  http.get(url, callback);
}

fns.post = function(query, options, callback) {
  var body = 'query=' + JSON.stringify({
    query: query,
    key: options.key,
    cursor: options.cursor
  })
  http.post('https://www.googleapis.com/freebase/v1/mqlread', body, callback);
}
//fns.post([{"id":"/en/radiohead","name":null}],{},console.log)

fns.isin = function(word, arr) {
  return arr.some(function(v) {
    return v == word
  })
}


  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return fns;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = fns;
  }

  return fns;

})()
//By Spencer Kelly (@spencermountain)
//https://github.com/spencermountain/Freebase-nodejs

//if nodejs, load these modules, otherwise assume they're included
if (typeof module !== 'undefined' && module.exports) {
  var _ = require('underscore');
  var async = require('async');
  var fns = require('./helpers/helpers');
  var data = require('./helpers/data.js').data;
}

var freebase = (function() {

  var freebase = {};


  ////////////
  /// to use mqlwrite, generate a access token by running 'node ./mqlwrite/create_access_token.js', and paste it in here
  //////////
  freebase.access_token=""
  ///////////

  var globals = {
    host: 'https://www.googleapis.com/freebase/v1/',
    image_host: "https://www.googleapis.com/freebase/v1/image",
    geosearch: 'http://api.freebase.com/api/service/geosearch',
    wikipedia_host: 'http://en.wikipedia.org/w/api.php',
    generic_query: {
      id: null,
      name: null,
      mid: null,
      type: []
    }
  }

  freebase.mqlread = function(query, options, callback) {
    this.doc = "interface to freebase's mql api";
    this.reference = "http://wiki.freebase.com/wiki/MQL";
    callback = callback || console.log;
    if (!query) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    options.uniqueness_failure = options.uniqueness_failure || "soft";
    options.cursor = options.cursor || "";
    var url=globals.host+'mqlread?query='+JSON.stringify(query)+"&cursor="+options.cursor
    fns.http(url, options, function(result) {
      return callback(result)
    })
  }
  // freebase.mqlread([{id:"/en/radiohead",name:null}])


  freebase.lookup_id = function(q, options, callback) {
    this.doc = "generic info for an id";
    var ps = fns.settle_params(arguments, freebase.lookup, {
      type: "/common/topic"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var query = fns.clone(globals.generic_query);
    query.id = ps.q;
    freebase.mqlread([query], options, function(r) {
      r = r.result || []
      return ps.callback(r[0] || {})
    })
  }
   // freebase.lookup_id('/en/radiohead')
  // freebase.lookup_id('/m/07jnt')

  freebase.search = function(q, options, callback) {
    this.doc = "regular search api";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch";

    var ps = fns.settle_params(arguments, freebase.search, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    if (ps.is_id) {
      return freebase.lookup_id(ps.q, ps.options, function(r){
         ps.callback([r])
      });
    }
    //if its a url
    if (ps.url) {
      return freebase.url_lookup(ps.q, ps.options, function(result) {
        if (result && result.result && result.result[0]) {
          return ps.callback(result.result);
        }
        return ps.callback([])
      })
    }
    //if its an id
    if (ps.is_id) {
      ps.options.limit = 1;
      return freebase.lookup_id(ps.q, ps.options, ps.callback)
    }
    ps.options.query = encodeURIComponent(ps.q);
    delete ps.options.property
    delete ps.options.strict
    var params = fns.set_params(ps.options)
    var url = globals.host + 'search/?' + params;
    if (ps.options.type == "/type/type" || ps.options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback([])
      }
      return ps.callback(result.result)
    })
  }
  // freebase.search("bill murray")
  // freebase.search("/m/01sh40")
  // freebase.search("/en/radiohead")

  //*************
  //slightly different lookup when its a url
  freebase.url_lookup = function(q, options, callback) {
    this.doc = "freebase search tuned for looking up a url";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.url_lookup, {
      type: "/common/topic",
      strict: true
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var output = fns.clone(globals.generic_query);
    var url = globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
    url += "&mql_output=" + encodeURIComponent(JSON.stringify(output));
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result) {
        return ps.callback({})
      }
      var r = result.result || []
      return ps.callback(r[0])
    })
  }
  // freebase.url_lookup("http://myspace.com/u2")


  freebase.lookup = function(q, options, callback) {
    this.doc = "freebase search with filters to ensure only a confident, unambiguous result";
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.lookup, {
      type: "/common/topic",
      strict: true
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its a url
    if (ps.url) {
      return freebase.url_lookup(ps.q, ps.options, ps.callback)
    }
    //if its an id
    if (ps.is_id) {
      ps.options.limit = 1;
      return freebase.lookup_id(ps.q, ps.options, ps.callback)
    }
    //craft the url
    var strength = ps.options.strength || "full";
    if (!ps.options.strict) {
      strength = "word"
    }
    var url = globals.host + 'search?limit=2&lang=en&type=' + ps.options.type + '&filter=';
    var output = fns.clone(globals.generic_query);
    url += encodeURIComponent('(any name{' + strength + '}:"' + ps.q + '" alias{' + strength + '}:"' + ps.q + '")');
    if (ps.options.type == "/type/type" || ps.options.type == "/type/property") {
      url += "&scoring=schema&stemmed=true"
    }
    url += "&mql_output=" + encodeURIComponent(JSON.stringify(output));
    return fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback({})
      }
      //filter-out shit results
      result = result.result || []
      result[0] = result[0] || {}
      result[1] = result[1] || {}
      //kill low-relevance
      if (!result[0].score && result[0].score < 30) {
        return ps.callback({})
      }
      if (ps.options.strict) {
        //kill if 2nd result is also notable
        if (((result[0].score || 0) * 0.7) < (result[1].score || 0)) {
          return ps.callback({})
        }
      }
      //kill if types are crap
      if (result[1] && result[0].notable && fns.isin(result[0].notable.id, data.kill)) {
        return ps.callback({})
      }
      result[0].name = result[0].name || result[0].text || '';
      return ps.callback(result[0])
    })
  }
  // freebase.lookup(["/en/radiohead", "http://myspace.com/u2"])
  // freebase.lookup("/m/01sh40")
  //freebase.search("/en/radiohead")
  // freebase.lookup("pulp fiction")



  freebase.get_id = function(q, options, callback) {
    this.doc = "like freebase.lookup but satisfied with an id"
    this.reference = "http://wiki.freebase.com/wiki/ApiSearch"
    var ps = fns.settle_params(arguments, freebase.get_id, {
      type: "/common/topic"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //is an id
    if (!ps.q || (ps.q.match(/\/.{1,32}\/.{3}/) != null)) {
      return ps.callback({
        id: ps.q
      })
    }
    //is a normal search
    freebase.lookup(ps.q, ps.options, function(result) {
      if (!result) {
        return ps.callback({})
      }
      if (ps.options.type == "/type/type") {
        result.mid = result.id;
        return ps.callback(result)
      }
      if (result.mid) {
        result.id = result.id || result.mid;
        return ps.callback(result)
      }
      return ps.callback({})
    })
  }
  //freebase.get_id("/en/radiohead")

  freebase.topic = function(q, options, callback) {
    this.doc = "topic api"
    this.reference = "http://wiki.freebase.com/wiki/Topic_API"
    var ps = fns.settle_params(arguments, freebase.topic, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      var id = topic.id;
      if (!id) {
        return ps.callback({})
      }
      ps.options.filter = ps.options.filter || 'all'
      var url = globals.host + 'topic' + id + '?' + fns.set_params(ps.options)
      fns.http(url, ps.options, function(result) {
        return ps.callback(result)
      })
    })
  }
  // freebase.topic("toronto", {filter:"allproperties"})



  freebase.paginate = function(query, options, callback) {
    this.doc = "get all of the results to your query";
    this.reference = "http://wiki.freebase.com/wiki/MQL";
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {}
    callback = callback || console.log
    options.max = options.max || 2000;
    var all = [];
    //recursive mqlread until cursor is false, or maximum reached
    var iterate = function(cursor) {
      options.cursor = cursor || ""
      freebase.mqlread(query, options, function(result) {
        if (!result || !result.result) {
          return callback(all);
        }
        all = all.concat(result.result);
        if (result.cursor && (!options.max || all.length < options.max)) {
          iterate(result.cursor)
        } else {
          return callback(all)
        }
      })
    }
    iterate('')
  }
  // freebase.paginate([{"type":"/astronomy/moon","name":null, limit:2}],{max:13})

  freebase.description = function(q, options, callback) {
    this.doc = "get a text blurb from freebase";
    this.reference = "http://wiki.freebase.com/wiki/ApiText"
    var ps = fns.settle_params(arguments, freebase.description, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var url = globals.host + 'text/' + topic.id;
      fns.http(url, ps.options, function(result) {
        if (!result.result) {
          return ps.callback('')
        }
        return ps.callback(result.result)
      })
    });
  }
  // freebase.description("tunisia")

  freebase.image = function(q, options, callback) {
    this.doc = "get a url for image href of on this topic"
    this.reference = "http://wiki.freebase.com/wiki/ApiImage"
    var ps = fns.settle_params(arguments, freebase.image, {
      maxheight: 250,
      maxwidth: 250,
      errorid: "/m/0djw4wd"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "/common/topic/image": [{
          "id": null
        }]
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0] || !result.result[0]["/common/topic/image"][0]) {
          return ps.callback('');
        }
        var url = globals.image_host + result.result[0]["/common/topic/image"][0].id;
        delete ps.options.strict
        delete ps.options.cursor
        delete ps.options.uniqueness_failure
        var params = fns.set_params(ps.options);
        url += '?' + params;
        return ps.callback(url)
      })
    })
  }
  // freebase.image('toronto',{type:"/location/citytown"})

  freebase.grammar = function(q, options, callback) {
    this.doc = "get the proper pronoun to use for a topic eg. he/she/they/it"
    var ps = fns.settle_params(arguments, freebase.grammar, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "type": [],
        "/people/person/gender": [{
          "id": null,
          "optional": true
        }],
        "/fictional_universe/fictional_character/gender": [{
          "id": null,
          "optional": true
        }]
      }]
      freebase.mqlread(query, options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback({})
        }
        result = result.result[0];
        var grammar = {
          plural: false,
          gender: null,
          article: "a",
          pronoun: "it",
          copula: "is"
        }
        //people grammar
        if (fns.isin('/people/person', result.type) || fns.isin('/fictional_universe/fictional_character', result.type)) {
          var gender = result["/people/person/gender"][0] || result["/fictional_universe/fictional_character/gender"][0];
          if (gender) {
            if (gender.id == "/en/male") { //male
              grammar.gender = "male";
              grammar.pronoun = "he";
            } else if (gender.id == "/en/female") { //female
              grammar.gender = "female";
              grammar.pronoun = "she";
            }
          } else { //no gender person
            grammar.gender = "unknown";
            grammar.pronoun = "they";
          }
        } else { //not a person
          //plural topics
          if (_.intersection(data.plural_types, result.type).length > 0) {
            grammar.plural = true;
            grammar.pronoun = "they";
            grammar.copula = "are"
          }
          //categories that need a 'the' instead of 'a'
          if (_.intersection(data.definate_articles, result.type).length > 0) {
            grammar.article = "the";
          }
        }
        return ps.callback(grammar);
      })
    })
  }
  // freebase.grammar("toronto maple leafs")

  freebase.same_as_links = function(q, options, callback) {
    this.doc = "turns a url into a freebase topic and list its same:as links"
    var ps = fns.settle_params(arguments, freebase.same_as_links, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    var url = globals.host + 'search?type=/common/topic&limit=1&query=' + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(result) {
      if (!result || !result.result || !result.result[0]) {
        return ps.callback({})
      }
      //get its formatted links from the topic api
      freebase.topic(result.result[0].mid, ps.options, function(all) {
        if (_.isEmpty(all)) {
          return ps.callback([]);
        }
        var links = [];
        //same-as ones
        if (all.property['/common/topic/topic_equivalent_webpage']) {
          links = all.property['/common/topic/topic_equivalent_webpage'].values.map(function(v) {
            return {
              href: v.value,
              title: fns.parseurl(v.value).authority
            }
          })
        }
        //webpage ones
        if (all.property['/common/topic/topical_webpage']) {
          links = links.concat(all.property['/common/topic/topical_webpage'].values.map(function(v) {
            var host = fns.parseurl(v.value).authority || ''
            return {
              href: v.value,
              title: host.replace(/^www\./, '')
            }
          }))
        }
        var obj = {
          topic: result.result[0],
          links: links
        }
        return ps.callback(obj)
      })
    })
  }
  // freebase.same_as_links("toronto maple leafs")

  freebase.translate = function(q, options, callback) {
    this.doc = "return specific language title for a topic"
    this.reference = "http://wiki.freebase.com/wiki/I18n"
    var ps = fns.settle_params(arguments, freebase.translate, {
      lang: "/lang/fr"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    if (!ps.options.lang.match(/\/lang\//)) {
      ps.options.lang = '/lang/' + ps.options.lang
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": [{
          "lang": ps.options.lang,
          "value": null
        }]
      }]
      freebase.mqlread(query, {}, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback('')
        }
        var name = result.result[0].name || [{}]
        name = name[0].value || '';
        return ps.callback(name)
      })
    })
  }
  // freebase.translate("toronto maple leafs", {lang:"/lang/ja"})

  freebase.notable = function(q, options, callback) {
    this.doc = "get a topic's notable type"
    var ps = fns.settle_params(arguments, freebase.notable, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.topic(ps.q, {
      filter: "/common/topic/notable_types"
    }, function(result) {
      if (!result || !result.property || !result.property['/common/topic/notable_types']) {
        return ps.callback({})
      }
      var notable = result.property['/common/topic/notable_types'] || {
        values: []
      };
      notable.values[0].name = notable.values[0].text;
      return ps.callback(notable.values[0])
    });
  }
  // freebase.notable("toronto maple leafs")

  freebase.sentence = function(q, options, callback) {
    this.doc = "get the first sentence of a topic description"
    this.reference = "http://wiki.freebase.com/wiki/APIText"
    var ps = fns.settle_params(arguments, freebase.sentence, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.description(ps.q, ps.options, function(desc) {
      if (!desc) {
        return ps.callback("")
      }
      desc = fns.sentenceparser(desc) || []
      desc = desc[0] || ''
      desc = desc.replace(/\(.*?\)/g, '') //remove birthdates
      desc = desc.replace(/  /g, ' ')
      return ps.callback(desc)
    })
  }
  // freebase.sentence('john malkovich',{},console.log)
  // freebase.sentence(['radiohead','john malkovich'],{},console.log)

  freebase.list = function(q, options, callback) {
    this.doc = "get a list of topics in a type"
    var ps = fns.settle_params(arguments, freebase.list, {
      limit: 2000
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback([]);
    }
    //singularize it if its not an id
    if (!ps.q.match(/\/.{1,12}\/.{3}/)) {
      ps.q = fns.singularize(ps.q);
    }
    //get its id
    freebase.get_id(ps.q, {
      type: "/type/type"
    }, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "type": topic.id,
        "name": null,
        "id": null,
        "mid": null,
        "limit": 100
      }]
      if (ps.options.extend) {
        for (var i in ps.options.extend) {
          query[0][i] = ps.options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, ps.callback)
    })
  }
  // freebase.list("hurricanes",{}, function(r){console.log(r)})
  // freebase.list("moons",{}, function(r){console.log(r)})


  freebase.place_data = function(geo, options, callback) {
    this.doc = "from a geo-coordinate, get the town, province, country, and timezone for it"
    callback = callback || console.log;
    if (!geo) {
      return callback({})
    }
    options = options || {};
    //handle an array
    if (fns.isarray(geo) && geo.length > 1) {
      var ps = fns.settle_params(arguments, freebase.place_data, {});
      return fns.doit_async(ps)
    }
    var location = {
      "coordinates": [geo.lng, geo.lat],
      "type": "Point"
    }
    var out = [{
      "mid": null,
      "name": null,
      "type": []
    }]
    //999000ft  == 30k
    var filter='(all type:/location/citytown (within radius:999000ft lon:'+ geo.lng +' lat:'+ geo.lat +'))'
    var url = globals.host+'search?filter='+ filter +'&limit=200'
    fns.http(url, options, function(r) {
      var all = {
        city: null,
        country: null,
        province: null,
        timezone: null
      }
      all.city = r.result[0];
      var query = [{
        "name": null,
        "id": r.result[0].mid,
        "/location/location/containedby": [{
          "id": null,
          "name": null,
          "type": [],
          "optional": true,
          "/location/location/time_zones": [{
            "/time/time_zone/offset_from_uct": null,
            "id": null,
            "name": null,
            "optional": true
          }],
          "/location/location/containedby": [{
            "id": null,
            "name": null,
            "type": [],
            "optional": true,
            "/location/location/time_zones": [{
              "/time/time_zone/offset_from_uct": null,
              "id": null,
              "name": null,
              "optional": true
            }]
          }]
        }]
      }]
      freebase.mqlread(query, {}, function(r) {
        //hunt for the most appropriate topics in 2 layers
        for (var i in r.result[0]['/location/location/containedby']) {
          var v = r.result[0]['/location/location/containedby'][i]
          if (v.type.filter(function(t) {
            return t == "/location/country"
          })[0]) {
            all.country = {
              id: v.id,
              name: v.name
            }
          } else if (v.type.filter(function(t) {
            return t == "/location/administrative_division"
          })[0]) {
            all.province = {
              id: v.id,
              name: v.name
            }
          }
          if (v["/location/location/time_zones"][0] && v["/location/location/time_zones"].length == 1) {
            all.timezone = v["/location/location/time_zones"][0];
          }
          if (all.country) {
            return callback(all)
          }
          //second layer looks good too
          v['/location/location/containedby'].map(function(o) {
            if (o.type.filter(function(t) {
              return t == "/location/country"
            })[0]) {
              all.country = {
                id: o.id,
                name: o.name
              }
            } else if (!all.province && o.type.filter(function(t) {
              return t == "/location/administrative_division"
            })[0]) {
              all.province = {
                id: o.id,
                name: o.name
              }
            }
            if (!all.timezone && o["/location/location/time_zones"][0] && o["/location/location/time_zones"].length == 1) {
              all.timezone = o["/location/location/time_zones"][0];
            }
          })
        }
        return callback(all)
      })

    })
  }
  // freebase.place_data({lat:51.545414293637286,lng:-0.07589578628540039}, {}, console.log)


  freebase.incoming = function(q, options, callback) {
    this.doc = "get any incoming data to this topic, ignoring cvt types"
    var ps = fns.settle_params(arguments, freebase.incoming, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "id": topic.id,
        "/type/reflect/any_reverse": [{
          "link": null,
          "id": null,
          "name": null,
          "type": "/common/topic",
          "limit": 170
        }]
      }]
      //this technically doesn't paginate.
      freebase.paginate(query, ps.options, function(result) {
        if (!result || !result[0] || !result[0]['/type/reflect/any_reverse']) {
          return ps.callback([])
        }
        return ps.callback(result[0]['/type/reflect/any_reverse'])
      })
    })
  }
  // freebase.incoming("toronto")

  freebase.outgoing = function(q, options, callback) {
    this.doc = "return all outgoing links for a topic, traversing cvt types"
    var ps = fns.settle_params(arguments, freebase.outgoing, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }

    freebase.lookup(ps.q, ps.options, function(topic) {
      if (!topic || !topic.mid) {
        return ps.callback([])
      }
      freebase.topic(topic.mid, ps.options, function(result) {
        if (_.isEmpty(result)) {
          return ps.callback([]);
        }
        var out = [];
        //get rid of permissions and stuff..
        result.property = fns.kill_boring(result.property)
        Object.keys(result.property).forEach(function(key) {
          var v = result.property[key];
          //add topics
          if (v.valuetype == "object") {
            v.values = v.values.map(function(s) {
              s.property = key;
              return s
            })
            out = out.concat(v.values)
          }
          //add the topics from cvt values in the same manner
          if (v.valuetype == "compound") {
            v.values.forEach(function(c) {
              c.property = fns.kill_boring(c.property);
              Object.keys(c.property).forEach(function(key2) {
                if (c.property[key2].valuetype == "object") {
                  c.property[key2].values = c.property[key2].values.map(function(s) {
                    s.property = [key, key2];
                    return s
                  })
                  out = out.concat(c.property[key2].values)
                }
              })
            })
          }
        })
        out = out.map(function(o) {
          return {
            name: o.text,
            id: o.id,
            property: o.property
          }
        })
        //add sentence-forms
        out = out.map(function(o) {
          var property = o.property || '';
          if (fns.isarray(o.property)) {
            property = o.property.join('');
          }
          o.sentence = topic.name + "'s " + _.last(property.split('/')).replace('_', ' ') + " is " + o.name; //ugly fallback
          var grammar = data.sentence_grammars.filter(function(v) {
            return v.id == property
          })[0] || {}
          if (grammar["sen"] && topic.name && o.name) {
            o.sentence = grammar["sen"].replace(/\bsubj\b/, topic.name).replace(/\bobj\b/, o.name);
          }
          return o
        })
        return ps.callback(out)
      })
    })
  }
  // freebase.outgoing("vancouver")

  freebase.graph = function(q, options, callback) {
    this.doc = "return all outgoing and incoming links for a topic"
    var ps = fns.settle_params(arguments, freebase.graph, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.lookup(ps.q, ps.options, function(topic) {
      if (!topic) {
        return ps.callback({})
      }
      delete topic.score;
      delete topic.lang;
      ps.options.filter = "allproperties";
      freebase.topic(topic.mid, ps.options, function(r) {
        if (!r || !r.property) {
          return ps.callback([])
        }
        var incoming = {};
        var outgoing = {};
        Object.keys(r.property).forEach(function(k) {
          if (k.match(/^\!/)) {
            outgoing[k] = r.property[k]
          } else {
            incoming[k] = r.property[k]
          }
        })
        incoming = fns.parse_topic_api(incoming);
        outgoing = fns.parse_topic_api(outgoing);
        var out = incoming.map(function(v) {
          return {
            subject: topic,
            property: {
              id: v.property
            },
            object: v,
            direction: "outgoing"
          }
        })
        out = out.concat(outgoing.map(function(v) {
          return {
            object: topic,
            property: {
              id: v.property
            },
            subject: v,
            direction: "incoming"
          }
        }))
        //add the sentences
        out = out.map(function(obj) {
          obj.property.id = obj.property.id.replace(/^\!/, '');
          delete obj.subject.property;
          var grammar = data.sentence_grammars.filter(function(v) {
            return v.id == obj.property.id
          })[0] || {}
          obj.sentence = obj.subject.name + "'s " + _.last(obj.property.id.split('/')).replace('_', ' ') + " is " + obj.object.name;
          if (grammar["sen"] && obj.subject.name && obj.object.name) {
            obj.sentence = grammar["sen"].replace(/\bsubj\b/, obj.subject.name).replace(/\bobj\b/, obj.object.name);
          }
          return obj
        })
        return ps.callback(out)
      })
    })
  }
  //freebase.graph("toronto")
  // freebase.graph("/m/07jnt")
  // freebase.graph("shawshank redemption")

  freebase.related = function(q, options, callback) {
    this.doc = "get similar topics to a topic"
    var ps = fns.settle_params(arguments, freebase.related, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var all = [];
    //pluck relevant connected topics from outgoing links
    freebase.outgoing(ps.q, ps.options, function(result) {
      all = result.filter(function(v) {
        return fns.isin(v.property, data.related_properties)
      })
      //randomize the results
      all = all.sort(function(a, b) {
        return (Math.round(Math.random()) - 0.5);
      })
      all = all.map(function(v) {
        if (!v.sentence) {
          v.sentence = v.name + " is related to " + result.name
        }
        return v
      })
      all = fns.json_unique(all, "id")
      if (all.length >= options.max) {
        return ps.callback(all)
      }
      //else, append topics that share the notable type
      freebase.notable(ps.q, ps.options, function(result) {
        if (result && result.id) {
          return freebase.list(result.id, {
            max: ps.options.max
          }, function(r) {
            if (!r || _.isEmpty(r)) {
              return ps.callback(all)
            }
            r = r.map(function(v) {
              v.sentence = v.name + " is also a " + result.name;
              return v
            })
            all = all.concat(r); //todo
            all = fns.json_unique(all, "id")
            all = all.sort(function(a, b) {
              return (Math.round(Math.random()) - 0.5);
            })
            return ps.callback(all)
          })
        } else {
          return ps.callback(all)
        }
      })
    })
  }
  // freebase.related("toronto", {}, function(r){console.log(JSON.stringify(r, null, 2));})

  freebase.is_a = function(q, options, callback) {
    this.doc = "get a list of identifiers for a topic"
    var ps = fns.settle_params(arguments, freebase.related, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.topic(ps.q, ps.options, function(r) {
      if (_.isEmpty(r)) {
        return ps.callback({});
      }
      var types = r.property["/type/object/type"] || {}
      types = types.values || []
      types = types.filter(function(v) {
        return !v.text.match(/Topic/)
      })
      types = types.map(function(v) {
        return {
          name: v.text,
          id: v.id,
          property: "/type/object/type"
        }
      })
      r = fns.parse_topic_api(r.property)
      r = r.filter(function(v) {
        return fns.isin(v.property, data.is_a)
      })
      r = r.concat(types)
      return ps.callback(r)
    })
  }
  // freebase.is_a("toronto")
  // freebase.is_a("george clooney")

  freebase.property_lookup = function(q, options, callback) {
    this.doc = "lookup soft property matches, like 'birthday' vs 'date of birth'"
    var ps = fns.settle_params(arguments, freebase.property_lookup, {
      type: "/type/property"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.search(ps.q, ps.options, function(candidate_properties) {
      //look up offline for property aliases
      if (!q.match(/\/.*?\/.*?\//)) {
        q = q.toLowerCase();
        q = q.replace(/  /, ' ');
        q = q.replace(/^\s+|\s+$/, '');
        var property_singular = fns.singularize(q);
        candidate_properties = candidate_properties.concat(data.properties.filter(function(v) {
          return v.n == q || v.n == property_singular
        }))
      }
      return ps.callback(candidate_properties)
    })
  }
  // freebase.property_lookup("albums")


  freebase.question = function(q, options, callback) {
    this.doc = "give a topic and a property, and get a list of results"
    var ps = fns.settle_params(arguments, freebase.question, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid || !ps.options.property) {
      return ps.callback({});
    }
    var property = ps.options.property
    var type = ps.options.property.match(/\/.*?\/.*?\//)
    //straight-up id search
    if (property.match(/^\/.{1,12}\/.{3}/)) {
      return freebase.topic(q, {}, function(r) {
        if (!r || !r.property || !r.property[property]) {
          return ps.callback([])
        }
        return ps.callback(r.property[property].values)
      })
    }
    var candidate_metaschema = fns.metaschema_lookup(property);
    if (candidate_metaschema) {
      ps.options.filter = '(all ' + candidate_metaschema + ':"' + q + '")'
      freebase.search('', options, function(result) {
        return ps.callback(result)
      })
    } else {
      freebase.property_lookup(property, {}, function(candidate_properties) {
        if (candidate_properties.length === 0) {
          return ps.callback([])
        }
        ps.options.filter = type;
        //look for these properties in the topic api
        freebase.topic(ps.q, ps.options, function(result) {
          if (_.isEmpty(result)) {
            return ps.callback({});
          }
          var all = [];
          candidate_properties.forEach(function(p) {
            if (result.property[p.id]) {
              all = all.concat(result.property[p.id].values)
            }
          })
          all = fns.json_unique(all, "id")
          return ps.callback(all)
        })
      })
    }
  }
  // freebase.question("keanu reeves", {property:"children"})
  //freebase.question("thom yorke", "produced") //******
  // freebase.question("pulp fiction", {property:"/film/film/initial_release_date"})
  // freebase.question("keanu reeves", {property:"films"}) //******


  freebase.dig = function(q, options, callback) {
    this.doc = "transitive query on a specific property, maximum 3-ply"
    var ps = fns.settle_params(arguments, freebase.property_lookup, {
      max: 25
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var all = [];
    freebase.question(ps.q, ps.options, function(r) {
      if (!r || !fns.isarray(r) || r.length === 0) {
        return ps.callback(all)
      }
      all = all.concat(r);
      r = r.slice(0, ps.options.max).map(function(v) {
        return v.id
      })
      return fns.doit_async({
        q: r,
        options: ps.options,
        method: freebase.question,
        callback: function(big) {
          if (!big || !fns.isarray(big) || big.length === 0) {
            return ps.callback(all)
          }
          all = all.concat(_.flatten(big, 'shallow'))
          all = fns.json_unique(all, "id")
         //todo: fix
         obj= {q:r, options:ps.options, method:freebase.question, callback:function(big) {
            if (!big || !fns.isarray(big) || big.length === 0) {
              return ps.callback(all)
            }
            all = all.concat(_.flatten(big, 'shallow'))
            all = fns.json_unique(all, "id")
            return callback(all)
          }}
          fns.doit_async(obj)
        }
      })
    })
  }
  // freebase.dig('/en/bovid', {property:'/biology/organism_classification/lower_classifications'}, function(r){
  //   console.log(r)
  // })
  // freebase.dig('/en/toronto', {property:'/location/location/contains'}, function(r){
  //   console.log(r)
  // })

  freebase.gallery = function(q, options, callback) {
    this.doc = "list of topics with images"
    var ps = fns.settle_params(arguments, freebase.gallery, {
      extend: {
        "/common/topic/image": [{
          "id": null,
          "optional": "required"
        }]
      }
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.list(ps.q, ps.options, function(result) {
      result = result.map(function(obj) {
        obj.href = globals.image_host + _.last(obj["/common/topic/image"]).id;
        obj.thumbnail = globals.image_host + _.last(obj["/common/topic/image"]).id + '?mode=fillcropmid&maxwidth=150&maxheight=150&errorid=/m/0djw4wd';
        obj = freebase.add_widget(obj)
        return obj;
      })
      return ps.callback(result)
    })
  }
  // freebase.gallery('hurricanes') //******


  freebase.wordnet = function(q, options, callback) {
    this.doc = "query wordnet via freebase"
    var ps = fns.settle_params(arguments, freebase.wordnet, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    var query = [{
      "id": null,
      "type": "/base/wordnet/synset",
      "gloss": null,
      "syntactic_category": null,
      "sort": [
        "syntactic_category",
        "word.sense_number",
        "a:word.word_number"],
      "word": {
        "sense_number": null,
        "derivationally_related_forms": [{
          "sense": {
            "name": null,
            "id": null
          },
          "optional": true
        }],
        "word": {
          "word": ps.q
        }
      },
      "a:word": [{
        "word_number": null,
        "word": {
          "word": null
        }
      }]
    }]
    if (ps.options.limit) {
      query[0].limit = ps.options.limit;
    }
    freebase.mqlread(query, ps.options, function(r) {
      return ps.callback(r.result)
    })
  }
  // freebase.wordnet("charming")

  freebase.transitive = function transitive(q, options, callback) {
    this.doc = "do a transitive-query, like all rivers in canada, using freebase metaschema"
    var ps = fns.settle_params(arguments, freebase.transitive, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var candidate_metaschema = fns.metaschema_lookup(ps.options.property);
      if (candidate_metaschema) {
        ps.options.filter = '(all ' + candidate_metaschema + ':"' + topic.mid + '")'
        freebase.search('', ps.options, function(result) {
          return ps.callback(result)
        })
      } else {
        return ps.callback([])
      }
    })
  }
  //*******
 // freebase.transitive("ontario", {property:"part_of"}, function(r){
 //  console.log(r)
 // })



  freebase.geolocation = function(q, options, callback) {
    this.doc = "lat/long for a topic"
    var ps = fns.settle_params(arguments, freebase.geolocation, {
      type: "/location/location"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback({})
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "/location/location/geolocation": [{
          "latitude": null,
          "longitude": null,
          "type": "/location/geocode",
          "optional": true
        }]
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (result.result && result.result[0] && result.result[0]['/location/location/geolocation'][0]) {
          var geo = result.result[0]['/location/location/geolocation'][0];
          delete geo.type;
          delete geo.optional;
          return ps.callback(geo);
        }
        return ps.callback({})
      })
    })
  }
  // freebase.geolocation("cn tower")

  freebase.nearby = function(q, options, callback) {
    this.doc = "list of topics nearby a location"
    var ps = fns.settle_params(arguments, freebase.nearby, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.geolocation(ps.q, {}, function(geo) {
      if (!geo || !geo.latitude || !geo.longitude) {
        return ps.callback([])
      }
      ps.options.within = ps.options.within || 500;
      ps.options.type = ps.options.type || "/location/location";

      var filter='(all type:'+ps.options.type+' (within radius:'+ps.options.within+'ft lon:'+ geo.longitude +' lat:'+ geo.latitude +'))'
      var url = globals.host+'search?filter='+ encodeURIComponent(filter) +'&limit=200'
      fns.http(url, ps.options, function(r) {
        return ps.callback(r.result)
      })
    })
  }
  // freebase.nearby("cn tower", {type:"/location/location"}, console.log)


  freebase.inside = function(q, options, callback) {
    this.doc = "list of topics inside a location"
    var ps = fns.settle_params(arguments, freebase.inside, {
      property: "part_of"
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //handy to have their geocoordinates too
    ps.options.mql_output = ps.options.mql_output || [{
      "name": null,
      "id": null,
      "type": "/location/location",
      "/location/location/geolocation": [{
        "latitude": null,
        "longitude": null,
        "type": "/location/geocode",
        "optional": true
      }]
    }]
    freebase.transitive(ps.q, ps.options, function(r) {
      return ps.callback(r)
    })
  }
  // freebase.inside("montreal")//***********


  freebase.wikipedia_page = function(q, options, callback) {
    this.doc = "get a url for wikipedia based on this topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value": null
        }
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback('')
        }
        return ps.callback('http://en.wikipedia.org/wiki/' + fns.mql_unencode(result.result[0].key.value))
      })
    })
  }
  // freebase.wikipedia_page('toronto')

  freebase.dbpedia_page = function(q, options, callback) {
    this.doc = "get a url for dbpedia based on this topic"
    var ps = fns.settle_params(arguments, freebase.dbpedia, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback("")
      }
      var query = [{
        "id": topic.id,
        "name": null,
        "key": {
          "namespace": "/wikipedia/en_title",
          "value": null
        }
      }]
      freebase.mqlread(query, ps.options, function(result) {
        if (!result || !result.result || !result.result[0]) {
          return ps.callback({})
        }
        var key = fns.mql_unencode(result.result[0].key.value)
        var obj = {
          html: 'http://dbpedia.org/page/' + key,
          json: 'http://dbpedia.org/data/' + key + '.json',
        }
        return ps.callback(obj)
      })
    })
  }
  // freebase.dbpedia_page('toronto')

  freebase.wikipedia_categories = function(q, options, callback) {
    this.doc = "get the wikipedia categories for a topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia_categories, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    // if (ps.q.match(/ /) || ps.q.substr(0, 1) == ps.q.substr(0, 1).toLowerCase() || ps.q.match(/^\//)) {
    //   return freebase.wikipedia_page(ps.q, options, function(r) {
    //     freebase.wikipedia_categories(r, options, ps.callback)
    //   })
    // }
    var url = globals.wikipedia_host + '?action=query&prop=categories&format=json&clshow=!hidden&cllimit=200&titles=' + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return ps.callback([])
      }
      var cats = r.query.pages[Object.keys(r.query.pages)[0]].categories || []
      cats = cats.map(function(v) {
        return v.title
      })
      return ps.callback(cats)
    })
  }
  // freebase.wikipedia_categories(["Thom Yorke","Toronto"], {}, console.log)
  // freebase.wikipedia_categories("Thom Yorke", {}, console.log)//****

  freebase.wikipedia_links = function(q, options, callback) {
    this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
    callback = callback || console.log;
    var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
       var ps = fns.settle_params(arguments, freebase.wikipedia_links, {});
      return fns.doit_async(ps)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function(r) {
        freebase.wikipedia_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=links&format=json&plnamespace=0&pllimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].links || []
      //filter-out non-freebase topics
      links = links.filter(function(v) {
        return v.title.match(/^List of /i) == null
      })
      links = links.map(function(o) {
        o.id = "/wikipedia/en/" + freebase.mql_encode(o.title.replace(/ /g, '_'));
        o.name = o.title;
        delete o.title;
        delete o.ns;
        return o
      })
      return callback(links)
    })
  }
  // freebase.wikipedia_links("Toronto", {}, console.log)

  freebase.wikipedia_external_links = function(q, options, callback) {
    this.doc = "outgoing links from this wikipedia page, converted to freebase ids"
    callback = callback || console.log;
    var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
       var ps = fns.settle_params(arguments, freebase.wikipedia_external_links, {});
      return fns.doit_async(ps)
    }
    //if its not a wikipedia title, reuse get-topic logic for searches/ids
    if (q.match(/ /) || q.substr(0, 1) == q.substr(0, 1).toLowerCase() || q.match(/^\//)) {
      return freebase.wikipedia_page(q, options, function(r) {
        freebase.wikipedia_external_links(r, options, callback)
      })
    }
    var url = globals.wikipedia_host + '?action=query&prop=extlinks&format=json&ellimit=500&titles=' + encodeURIComponent(q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.pages || !r.query.pages[Object.keys(r.query.pages)[0]]) {
        return callback([])
      }
      var links = r.query.pages[Object.keys(r.query.pages)[0]].extlinks || []
      links = links.filter(function(v) {
        return v["*"].match(/^http/)
      })
      links = links.map(function(v) {
        var box = fns.parseurl(v["*"]);
        return {
          url: v["*"],
          domain: box.host
        }
      })
      return callback(links)
    })
  }
  // freebase.wikipedia_external_links("Toronto", {}, console.log)



  freebase.property_introspection = function(q, options, callback) {
    this.doc = "common lookups for freebase property data"
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    var ps = fns.settle_params(arguments, freebase.property_introspection);
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
      return fns.doit_async(ps)
    }
    var query = [{
      "id": q,
      "mid": null,
      "name": null,
      "type": "/type/property",
      "reverse_property": [{
        "id": null,
        "name": null,
        "optional": true
      }],
      "expected_type": [{
        "id": null,
        "name": null,
        "optional": true,
        "/freebase/type_hints/mediator": null
      }],
      "unique": null,
      "schema": {
        "id": null,
        "name": null,
        "/freebase/type_profile/instance_count": null,
        "/freebase/type_hints/mediator": null
      },
      "/common/topic/description": null
    }]
    freebase.mqlread(query, options, function(r) {
      var obj = {}
      if (!r || !r.result || !r.result[0]) {
        return callback(obj)
      }
      r = r.result[0]
      obj.name = r.name
      obj.id = r.id
      obj.type = r.schema
      obj.description = r["/common/topic/description"]
      obj.unique = r.unique || false;
      obj.reverse_property = r.reverse_property
      obj.expected_type = r.expected_type

      //get its metaschema
      var query = [{
        "name": null,
        "type": "/base/fbontology/semantic_predicate",
        "paths": {
          "a:properties": q,
          "b:properties": [{
            "id": null
          }]
        }
      }]
      freebase.mqlread(query, options, function(r) {
        obj.meta = r.result
        return callback(obj)
      })
    })
  }
  // freebase.property_introspection("/government/politician/party")


  freebase.schema = function(q, options, callback) {
    this.doc = "common lookups for types and properties"
    callback = callback || console.log;
    if (!q) {
      return callback({})
    }
    if (typeof options == "function") {
      callback = options;
      options = {};
    } //flexible parameter
    options = options || {};
    //handle an array
    if (fns.isarray(q) && q.length > 1) {
      var ps = fns.settle_params(arguments, freebase.schema, {});
      return fns.doit_async(ps)
    }
    //see if its a type
    options.type="/type/type"
    freebase.search(q, options, function(r) {
      if (r && r[0] && r[0].id) {

        r = r[0]
        var query = [{
          "id": r.id,
          "mid": null,
          "name": null,
          "properties": [{
            "id": null,
            "name": null,
            "/type/property/reverse_property": [{
              "id": null,
              "name": null,
              "optional": true
            }]
          }],
          "/freebase/type_hints/mediator": null,
          "/freebase/type_hints/included_types": [{
            "id": null,
            "name": null,
            "optional":true
          }],
          "/freebase/type_profile/published": null,
          "/type/type/expected_by": [{
            "id": null,
            "name": null,
            "optional":true
          }],
          "/freebase/type_profile/instance_count": null,
          "/freebase/type_profile/property_count": null,
          "domain": {
            "id": null,
            "name": null
          },
          "/freebase/type_profile/equivalent_topic": {
            "id": null,
            "name": null,
            "optional":true
          },
          "type": "/type/type"
        }]
        freebase.mqlread(query, options, function(r) {
          if (!r || !r.result || !r.result[0]) {
            return callback({})
          }
          r = r.result[0]
          var obj = {}
          obj.domain = r.domain
          obj.id = r.id
          obj.included_types = r["/freebase/type_hints/included_types"]
          obj.incoming_properties = r["/type/type/expected_by"]
          obj.is_compound_value = r["/freebase/type_hints/mediator"] || false
          obj.is_commons = r["/freebase/type_profile/published"] || false
          obj.equivalent_topic = r["/freebase/type_profile/equivalent_topic"]
          obj.topic_count = r["/freebase/type_profile/instance_count"] || 0
          obj.property_count = r["/freebase/type_profile/property_count"] || 0;
          //types that include this one
          var query = [{
            "id": null,
            "name": null,
            "s:name": {
              "value": null,
              "lang": "/lang/en",
              "optional": "required"
            },
            "/freebase/type_hints/included_types": [{
              "id": obj.id
            }]
          }]
          freebase.mqlread(query, options, function(r) {
            if (!r || !r.result) {
              return callback(obj)
            }
            obj.included_by = r.result.map(function(v) {
              return {
                id: v.id,
                name: v.name
              }
            })
            return callback(obj)
          })
        })

      } else {
        freebase.property_lookup(q, options, function(r) {
          if (!r || !r[0] || !r[0].id) {
            return callback({})
          }
          return freebase.property_introspection(r[0].id, {}, callback)
        })
      }
    })
  }
  // freebase.schema("politician")


  //
  freebase.drilldown = function(q, options, callback) {
    this.doc = "get insight into the breakdown of the topics in this type, by type and quality"
    var ps = fns.settle_params(arguments, freebase.drilldown, {
      limit: 1000
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback([]);
    }
    //singularize it if its not an id
    if (!ps.q.match(/\/.{1,12}\/.{3}/)) {
      ps.q = fns.singularize(ps.q);
    }
    //get its id
    freebase.get_id(ps.q, {
      type: "/type/type"
    }, function(topic) {
      if (!topic || !topic.id) {
        return ps.callback([])
      }
      var query = [{
        "s:type": topic.id,
        "type": [],
        "name": null,
        "id": null,
        "limit": 150,
        "estimate-count": null,
        "/common/topic/image": [{
          "id": null,
          "limit": 1,
          "optional": true
        }],
        "key": [{
          "namespace": "/wikipedia/en",
          "limit": 1,
          "value": null,
          "optional": true
        }],
        "/common/topic/alias": [{
          "value": null,
          "limit": 1,
          "optional": true
        }]
      }]
      if (options.extend) {
        for (var i in options.extend) {
          query[0][i] = options.extend[i]
        }
      }
      freebase.paginate(query, ps.options, function(result) {
        var types = _.flatten(result.map(function(v) {
          return v.type
        }));
        types = types.filter(function(v) {
          return !v.match(/\/topic$/)
        })
        var topk = fns.topk(types, result.length);
        var aliases = result.filter(function(r) {
          return r["/common/topic/alias"].length > 0
        })
        var images = result.filter(function(r) {
          return r["/common/topic/image"].length > 0
        })
        var wikipedia = result.filter(function(r) {
          return r["key"].length > 0
        })
        var obj = {
          types: topk,
          alias_percent: fns.percentage(aliases.length, result.length),
          image_percent: fns.percentage(images.length, result.length),
          wikipedia_percent: fns.percentage(wikipedia.length, result.length),
          subset: result.length,
          "estimate-count": result[0]["estimate-count"]
        }
        ps.callback(obj)
      })
    })
  }
  // freebase.drilldown("/chemistry/chemical_compound",{max:400},console.log)


  freebase.mql_encode = function(s) {
    this.doc = "quote a unicode string to turn it into a valid mql /type/key/value"
    if (!s) {
      return ''
    }
    s = s.replace(/  /, ' ');
    s = s.replace(/^\s+|\s+$/, '');
    s = s.replace(/ /g, '_');
    var mqlkey_start = 'A-Za-z0-9';
    var mqlkey_char = 'A-Za-z0-9_-';
    var MQLKEY_VALID = new RegExp('^[' + mqlkey_start + '][' + mqlkey_char + ']*$');
    var MQLKEY_CHAR_MUSTQUOTE = new RegExp('([^' + mqlkey_char + '])', 'g');
    if (MQLKEY_VALID.exec(s)) // fastpath
    return s;
    var convert = function(a, b) {
      var hex = b.charCodeAt(0).toString(16).toUpperCase();
      if (hex.length == 2) hex = '00' + hex;
      if (hex.length == 3) hex = '0' + hex;
      return '$' + hex;
    };
    var x = s.replace(MQLKEY_CHAR_MUSTQUOTE, convert);
    if (x.charAt(0) == '-' || x.charAt(0) == '_') {
      x = convert(x, x.charAt(0)) + x.substr(1);
    }
    return x;
  }


  freebase.category_list = function(q, options, callback) {
    this.doc = "get the freebase topics in a wikipedia category"
    var ps = fns.settle_params(arguments, freebase.category_list, {
      depth: 1
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia category
    if (!ps.q.match(/Category:/)) {
      ps.q = 'Category:' + ps.q
    }
    var all_topics = [];
    var all_categories = [];
    iterate(ps.q, '')

    function iterate(cat, cmcontinue) {
      var url = globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmtitle=" + encodeURIComponent(cat) + "&cmcontinue=" + cmcontinue;
      fns.http(url, ps.options, function(r) {
        if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
          return ps.callback([])
        }
        all_categories = all_categories.concat(r.query.categorymembers.filter(function(v) {
          return v.ns == 14
        }));
        var cmcontinue = r["query-continue"] || {}
        cmcontinue = cmcontinue.categorymembers || {}
        cmcontinue = cmcontinue.cmcontinue || '';
        var topics = r.query.categorymembers.filter(function(v) {
          return v.ns == 0
        });
        topics = topics.map(function(v) {
          return {
            id: "/wikipedia/en/" + freebase.mql_encode(v.title),
            article: 'http://en.wikipedia.org/wiki/index.html?curid=' + v.pageid,
            title: v.title
          }
        })
        all_topics = all_topics.concat(topics);
        if (!cmcontinue) {
          return ps.callback(all_topics)
        } else {
          iterate(cat, cmcontinue); //recurse
        }
      })
    }
  }
  // freebase.category_list("Category:Redirects_from_plurals")



  freebase.wikipedia_subcategories = function(q, options, callback) {
    this.doc = "find the subcategories of this wikipedia category"
    var ps = fns.settle_params(arguments, freebase.wikipedia_subcategories, {
      depth: 1,
      already: []
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    //if its not a wikipedia category
    if (!ps.q.match(/Category:/)) {
      ps.q = 'Category:' + ps.q
    }
    var url = globals.wikipedia_host + "?action=query&list=categorymembers&format=json&cmlimit=400&cmnamespace=14&cmtitle=" + encodeURIComponent(ps.q);
    fns.http(url, ps.options, function(r) {
      if (!r || !r.query || !r.query.categorymembers || !r.query.categorymembers[Object.keys(r.query.categorymembers)[0]]) {
        return ps.callback([]);
      }
      var cats = r.query.categorymembers.map(function(v) {
        return v.title
      });
      //remove if done already (for recursive cats)
      cats = cats.filter(function(v) {
        return !fns.isin(v, ps.options.already)
      })
      ps.options.already = fns.compact_strong(_.flatten(ps.options.already.concat(cats)));
      if (ps.options.depth > 1 && cats.length > 0) {
        ps.options.depth = ps.options.depth - 1;
        return freebase.wikipedia_subcategories(cats, ps.options, function(r) {
          ps.options.already = ps.options.already.concat(r)
          return ps.callback(fns.compact_strong(_.flatten(ps.options.already)));
        })
      } else {
        return ps.callback(ps.options.already)
      }
    })
  }
  // freebase.wikipedia_subcategories("Category:Enzymes",{depth:2},function(r){console.log(JSON.stringify(r))})
  //freebase.wikipedia_subcategories(["Category:Toronto","Category:Vancouver"])


  freebase.rdf = function(q, options, callback) {
    this.doc = "RDF api"
    this.reference = "http://wiki.freebase.com/wiki/RDF"
    var ps = fns.settle_params(arguments, freebase.topic, {});
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    freebase.get_id(ps.q, ps.options, function(topic) {
      var id = topic.id;
      if (!id) {
        return ps.callback({})
      }
      ps.options.filter = ps.options.filter || 'all'
      var url = globals.host + "rdf" + id;
      fns.softget(url, ps.options, function(result) {
        return ps.callback(result || '')
      })
    })
  }
  // freebase.rdf("toronto")

  freebase.wikipedia_to_freebase = function(q, options, callback) {
    this.doc = "turn a wikipedia title or url into a freebase topic"
    var ps = fns.settle_params(arguments, freebase.wikipedia_to_freebase, {
      depth: 1
    });
    if (ps.array) {
      return fns.doit_async(ps);
    }
    if (!ps.valid) {
      return ps.callback({});
    }
    ps.q = ps.q.replace(/^https?:\/\/..\.wikipedia\.org\/wiki\//, '');
    var title = ps.q;
    var obj = {
      id: "/wikipedia/en/" + freebase.mql_encode(ps.q),
      title: title
    }
    return ps.callback(obj)
  }
  // freebase.wikipedia_to_freebase("Tony Hawk")



  freebase.add_widget = function(obj) {
    this.doc = "add a generic html view of a topic"
    if (!obj || !id) {
      return obj
    }
    var id = obj.mid || obj.id;
    var html = '<a href="#" class="imagewrap" data-id="' + id + '" style="position:relative; width:200px; height:200px;">' + '<img style="border-radius:5px;" src="' + globals.image_host + id + '?maxwidth=200&maxheight=200&errorid=/m/0djw4wd"/>'
    if (obj.name) {
      html += '<div class="caption" style="position:absolute; opacity:0.5; background:black; bottom:10px; color:white; left:10px; border-radius: 5px; min-width:100px; padding:5px;">' + obj.name + '</div>'
    }
    html += '</a>'
    obj.widget = html;
    return obj;
  }




  ////////mqlwrite

  freebase.mqlwrite = function(query, options, callback) {
      this.doc = "write to freebase";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      if (!query) {
        return callback({})
      }
      if (typeof options == "function") {
        callback = options;
        options = {};
      } //flexible parameter
      options = options || {};
      options.oauth_token = options.oauth_token || freebase.access_token
      if(!options.oauth_token){
        console.log("=========")
        console.log("to write to freebase, you must create an 'access token'")
        console.log("create one by running 'node ./mqlwrite/create_access_token' and following the instructions")
        console.log("=========")
      }
      var url = globals.host + 'mqlwrite?query=' + encodeURIComponent(JSON.stringify(query)) + "&oauth_token=" + (options.oauth_token || "")
      fns.http(url, callback)
  }
  freebase.add_type=function(topic, type, callback) {
      this.doc = "add a type to a freebase topic";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      var query = {
        "id": topic,
        "type": {
          "id": type,
          "connect": "insert"
        }
      }
      freebase.mqlwrite(query, {}, callback)
  }
  freebase.add_alias=function(topic, alias, callback) {
      this.doc = "add a alias to a freebase topic";
      this.reference = "http://wiki.freebase.com/wiki/MQLwrite";
      callback = callback || console.log;
      var query = {
        "id": topic,
        "/common/topic/alias": {
          "value": alias,
          "connect": "insert",
          "lang":"/lang/en"
        }
      }
      freebase.mqlwrite(query, {}, callback)
  }

  freebase.test_writes = function() {
    freebase.add_type("/en/radiohead", "/music/artist", console.log)
    // freebase.add_alias("/wikipedia/en/John_f_kenedy", "jfk", console.log)
  }
  // freebase.test_writes()





  //soften up the api so it will take these methods alternatively..

  // for(var i in aliases){
  //   aliases[i].map(function(v){
  //     freebase[v]=freebase[i]
  //     freebase[v].is_alias=true
  //   })
  // }



  //
  freebase.documentation = function(f, options, callback) {
    callback = callback || console.log;
    options = options || {};
    var str = [];
    str.push('Freebase.com nodejs-library')
    str.push('https://github.com/spencermountain/Freebase-nodejs--');
    if (f) {
      if (freebase[f]) {
        str.push(" * " + f)
        var f = new freebase[f]()
        str.push(f.doc)
        return
      } else {
        str.push("Couldn't find the function " + f + ". Here are the available functions:")
      }
    }
    Object.keys(freebase).filter(function(v){return v!="documentation"}).map(function(f) {
      str.push("==" + f + '==')
      var f = new freebase[f](null, {}, function() {})
      str.push('     -' + f.doc)
    })
    if (options.html) {
      str = str.join('<br/>')
    } else {
      str = str.join('\n')
    }
    callback(str)
  }
  // freebase.documentation()

  var aliases = {
    mqlread: ["query", "mql_read"],
    topic: ["topic_api", "all_data", "data", "everything", "get_data"],
    paginate: ["continue", "all", "each"],
    same_as_links: ["sameas", "sameAs", "sameaslinks", "links", "sameas_links", "external_links", "weblinks"],
    translate: ["translate_to", "multilingual", "i8n", "get_translation"],
    image: ["pic", "photo", "picture", "get_image", "image_url", "image_src"],
    description: ["get_description", "blurb", "get_blurb", "blurb_api", "text", "get_text"],
    notable: ["notable_type", "notabletype", "notable_for", "notable_as", "main_type", "type"],
    place_data: ["city", "country", "province", "place_info", "location_info", "location", "whereis"],
    incoming: ["incoming_links", "incoming_nodes", "inlinks"],
    outgoing: ["outgoing_links", "outgoing_nodes", "outlinks"],
    related: ["related_topics", "similar", "related_to", "get_related"],
    gallery: ["images", "get_images"],
    geolocation: ["geo", "geocoordinates", "geo_location", "lat_lng", "location"],
    nearby: ["near", "close_to"],
    inside: ["inside_of", "within", "contained_by", "contains"],
    mql_encode: ["encode", "escape"]
  }



  // export for AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return freebase;
    });
  }
  // export for Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = freebase;
  }

  return freebase;

})()


 return freebase; })()
})(jQuery)