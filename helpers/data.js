
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