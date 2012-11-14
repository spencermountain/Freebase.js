//simple sentences from freebase triples
exports.grammars=[
    {
      "property" : "/book/book_subject/works",
      "sentence form" : "obj is about subj"
    },
    {
      "property" : "/food/food/nutrients/food/nutrition_fact/nutrient",
      "sentence form" : "obj is found in subj"
    },
    {
      "property" : "/food/ingredient/dishes",
      "sentence form" : "obj contains subj"
    },
    {
      "property" : "/food/ingredient/incompatible_with_dietary_restrictions",
      "sentence form" : "obj does not allow subj"
    },
    {
      "property" : "/food/ingredient/more_specific_ingredient",
      "sentence form" : "obj is in subj"
    },
    {
      "property" : "/media_common/quotation_subject/quotations_about_this_subject",
      "sentence form" : "obj is a riddle in subj"
    },
    {
      "property" : "/medicine/drug_dosage_flavor/drugs_with_this_flavor",
      "sentence form" : "obj has the flavour of subj"
    },
    {
      "property" : "/award/award_nominee/award_nominations/award/award_nomination/award",
      "sentence form" : "subj won the obj"
    },
    {
      "property" : "/award/award_nominee/award_nominations/award/award_nomination/nominated_for",
      "sentence form" : "subj received an award nomination for obj"
    },
    {
      "property" : "/award/award_winner/awards_won/award/award_honor/award",
      "sentence form" : "subj won the obj"
    },
    {
      "property" : "/award/award_winner/awards_won/award/award_honor/award_winner",
      "sentence form" : "obj won an award for subj"
    },
    {
      "property" : "/celebrities/celebrity/celebrity_friends/celebrities/friendship/friend",
      "sentence form" : "obj is a friend of subj"
    },
    {
      "property" : "/film/actor/film/film/performance/film",
      "sentence form" : "subj acted in obj"
    },
    {
      "property" : "/film/person_or_entity_appearing_in_film/films/film/personal_film_appearance/film",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/food/diet_follower/follows_diet",
      "sentence form" : "subj is into subj"
    },
    {
      "property" : "/music/artist/album",
      "sentence form" : "obj is by subj"
    },
    {
      "property" : "/music/artist/genre",
      "sentence form" : "subj makes obj"
    },
    {
      "property" : "/music/artist/label",
      "sentence form" : "subj is signed onto obj"
    },
    {
      "property" : "/music/artist/origin",
      "sentence form" : "subj is from obj"
    },
    {
      "property" : "/music/artist/track",
      "sentence form" : "obj is by subj"
    },
    {
      "property" : "/music/artist/track_contributions/music/track_contribution/role",
      "sentence form" : "subj contributed to obj"
    },
    {
      "property" : "/music/artist/track_contributions/music/track_contribution/track",
      "sentence form" : "obj is by subj"
    },
    {
      "property" : "/music/group_member/instruments_played",
      "sentence form" : "subj plays obj"
    },
    {
      "property" : "/music/group_member/membership/music/group_membership/group",
      "sentence form" : "subj was in obj"
    },
    {
      "property" : "/music/group_member/membership/music/group_membership/role",
      "sentence form" : "subj plays obj"
    },
    {
      "property" : "/people/person/children",
      "sentence form" : "subj is parent to obj"
    },
    {
      "property" : "/people/person/education/education/education/institution",
      "sentence form" : "subj attended obj"
    },
    {
      "property" : "/people/person/gender",
      "sentence form" : "subj is obj"
    },
    {
      "property" : "/people/person/nationality",
      "sentence form" : "subj is from obj"
    },
    {
      "property" : "/people/person/place_of_birth",
      "sentence form" : "subj was born in obj"
    },
    {
      "property" : "/people/person/places_lived/people/place_lived/location",
      "sentence form" : "subj lived in obj"
    },
    {
      "property" : "/people/person/profession",
      "sentence form" : "subj is a obj"
    },
    {
      "property" : "/people/person/sibling_s/people/sibling_relationship/sibling",
      "sentence form" : "obj is a sibling of subj"
    },
    {
      "property" : "/people/person/spouse_s/people/marriage/spouse",
      "sentence form" : "obj is married to subj"
    },
    {
      "property" : "/people/person/spouse_s/people/marriage/type_of_union",
      "sentence form" : "subj is in a obj"
    },
    {
      "property" : "/tv/tv_actor/guest_roles/tv/tv_guest_role/episodes_appeared_in",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/architecture/building/building_function",
      "sentence form" : "subj is a obj"
    },
    {
      "property" : "/architecture/structure/address/location/mailing_address/citytown",
      "sentence form" : "subj is in obj"
    },
    {
      "property" : "/architecture/structure/architect",
      "sentence form" : "subj was designed by obj"
    },
    {
      "property" : "/architecture/structure/architectural_style",
      "sentence form" : "subj is an example of obj"
    },
    {
      "property" : "/architecture/structure/architecture_firm",
      "sentence form" : "subj was designed by obj"
    },
    {
      "property" : "/architecture/structure/owner/architecture/ownership/owner",
      "sentence form" : "obj owns subj"
    },
    {
      "property" : "/award/award_winning_work/awards_won/award/award_honor/award",
      "sentence form" : "subj has won the obj"
    },
    {
      "property" : "/location/location/containedby",
      "sentence form" : "subj is in obj"
    },
    {
      "property" : "/projects/project_focus/projects",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/travel/tourist_attraction/near_travel_destination",
      "sentence form" : "subj is a destination in or near obj"
    },
    {
      "property" : "/book/written_work/subjects",
      "sentence form" : "subj books are about obj"
    },
    {
      "property" : "/film/film_subject/films",
      "sentence form" : "subj has been in obj"
    },
    {
      "property" : "/film/music_contributor/film",
      "sentence form" : "subj was featured in obj"
    },
    {
      "property" : "/film/person_or_entity_appearing_in_film/films/film/personal_film_appearance/type_of_appearance",
      "sentence form" : "subj has appeared in films about obj"
    },
    {
      "property" : "/influence/influence_node/influenced",
      "sentence form" : "subj influenced obj"
    },
    {
      "property" : "/influence/influence_node/influenced_by",
      "sentence form" : "subj was influenced by obj"
    },
    {
      "property" : "/music/artist/concert_tours",
      "sentence form" : "subj went on the obj"
    },
    {
      "property" : "/music/composer/compositions",
      "sentence form" : "obj is a composition by subj"
    },
    {
      "property" : "/music/lyricist/lyrics_written",
      "sentence form" : "obj contains lyrics by obj"
    },
    {
      "property" : "/music/musical_group/member/music/group_membership/member",
      "sentence form" : "obj is a member of subj"
    },
    // {
    //   "property" : "/music/musical_group/member/music/group_membership/role",
    //   "sentence form" : "subj plays the obj"
    // },
    {
      "property" : "/music/producer/releases_produced",
      "sentence form" : "subj produced obj"
    },
    {
      "property" : "/music/producer/tracks_produced",
      "sentence form" : "subj produced obj"
    },
    {
      "property" : "/tv/tv_program_guest/appeared_on/tv/tv_guest_personal_appearance/episode",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/film/film_location/featured_in_films",
      "sentence form" : "subj was featured in obj"
    },
    {
      "property" : "/location/location/contains",
      "sentence form" : "obj is in subj"
    },
    {
      "property" : "/location/location/events",
      "sentence form" : "obj happened in subj"
    },
    {
      "property" : "/location/location/nearby_airports",
      "sentence form" : "obj is an airport in subj"
    },
    {
      "property" : "/location/location/people_born_here",
      "sentence form" : "obj was born in subj"
    },
    {
      "property" : "/location/location/time_zones",
      "sentence form" : "subj in the obj"
    },
    {
      "property" : "/location/place_with_neighborhoods/neighborhoods",
      "sentence form" : "obj is a neighbourhood in subj"
    },
    {
      "property" : "/olympics/olympic_bidding_city/olympics_bid_on/olympics/olympic_city_bid/olympic_games",
      "sentence form" : "subj was a bidder for the obj"
    },
    {
      "property" : "/olympics/olympic_host_city/olympics_hosted",
      "sentence form" : "subj hosted the obj"
    },
    {
      "property" : "/organization/organization_scope/organizations_with_this_scope",
      "sentence form" : "obj is an organisation in subj"
    },
    {
      "property" : "/periodicals/newspaper_circulation_area/newspapers",
      "sentence form" : "obj is popular in subj"
    },
    {
      "property" : "/sports/sports_team_location/teams",
      "sentence form" : "obj is a team from subj"
    },
    {
      "property" : "/symbols/flag_referent/flag/symbols/flag_use/flag",
      "sentence form" : "subj displays the obj"
    },
    {
      "property" : "/travel/travel_destination/how_to_get_here/travel/transportation/mode_of_transportation",
      "sentence form" : "You can reach subj by obj"
    },
    {
      "property" : "/travel/travel_destination/how_to_get_here/travel/transportation/transport_terminus",
      "sentence form" : "obj is an airport in subj"
    },
    {
      "property" : "/travel/travel_destination/how_to_get_here/travel/transportation/transport_operator",
      "sentence form" : "obj is tranport operator in subj"
    },
    {
      "property" : "/travel/travel_destination/local_transportation",
      "sentence form" : "obj is a mode of local transport in subj"
    },
    {
      "property" : "/travel/travel_destination/tourist_attractions",
      "sentence form" : "obj is a tourist attraction in subj"
    },
    {
      "property" : "/award/hall_of_fame_inductee/hall_of_fame_inductions/award/hall_of_fame_induction/hall_of_fame",
      "sentence form" : "subj was induced into the obj"
    },
    {
      "property" : "/fictional_universe/fictional_character_creator/fictional_characters_created",
      "sentence form" : "subj has played obj"
    },
    {
      "property" : "/film/actor/film/film/performance/character",
      "sentence form" : "subj has played obj"
    },
    {
      "property" : "/film/actor/film/film/performance/special_performance_type",
      "sentence form" : "obj is a special talent of subj"
    },
    {
      "property" : "/film/film_story_contributor/film_story_credits",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/film/producer/film",
      "sentence form" : "subj produced obj"
    },
    {
      "property" : "/film/writer/film",
      "sentence form" : "subj wrote obj"
    },
    {
      "property" : "/people/person/ethnicity",
      "sentence form" : "subj is obj"
    },
    {
      "property" : "/people/person/parents",
      "sentence form" : "obj is a parent of subj"
    },
    {
      "property" : "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/character",
      "sentence form" : "obj is a character played by subj"
    },
    {
      "property" : "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/special_performance_type",
      "sentence form" : "subj is obj"
    },
    {
      "property" : "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/series",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/tv/tv_personality/tv_regular_appearances/tv/tv_regular_personal_appearance/appearance_type",
      "sentence form" : "subj has appeared as obj"
    },
    {
      "property" : "/tv/tv_personality/tv_regular_appearances/tv/tv_regular_personal_appearance/program",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/tv/tv_program_guest/appeared_on/tv/tv_guest_personal_appearance/appearance_type",
      "sentence form" : "subj has appeared as obj"
    },
    {
      "property" : "/tv/tv_writer/tv_programs/tv/tv_program_writer_relationship/tv_program",
      "sentence form" : "subj was part of obj"
    },
    {
      "property" : "/award/award_nominated_work/award_nominations/award/award_nomination/award",
      "sentence form" : "subj was nominated for obj"
    },
    {
      "property" : "/award/award_nominated_work/award_nominations/award/award_nomination/award_nominee",
      "sentence form" : "obj had a leading role in subj"
    },
    {
      "property" : "/award/award_winning_work/awards_won/award/award_honor/award_winner",
      "sentence form" : "obj has been awarded for subj"
    },
    {
      "property" : "/award/ranked_item/appears_in_ranked_lists/award/ranking/list",
      "sentence form" : "subj is a top rated in obj"
    },
    {
      "property" : "/film/film/cinematography",
      "sentence form" : "obj worked on subj"
    },
    {
      "property" : "/film/film/costume_design_by",
      "sentence form" : "obj designed costumes for subj"
    },
    {
      "property" : "/film/film/country",
      "sentence form" : "obj is the country of origin of subj"
    },
    {
      "property" : "/film/film/directed_by",
      "sentence form" : "subj was directed by obj"
    },
    {
      "property" : "/film/film/distributors/film/film_film_distributor_relationship/distributor",
      "sentence form" : "obj distributed subj"
    },
    {
      "property" : "/film/film/distributors/film/film_film_distributor_relationship/film_distribution_medium",
      "sentence form" : "obj was a distribution stream for subj"
    },
    {
      "property" : "/film/film/edited_by",
      "sentence form" : "subj was edited by obj"
    },
    {
      "property" : "/film/film/executive_produced_by",
      "sentence form" : "subj was executive produced by obj"
    },
    {
      "property" : "/film/film/featured_film_locations",
      "sentence form" : "subj was set in obj"
    },
    {
      "property" : "/film/film/film_art_direction_by",
      "sentence form" : "subj was art directed by obj"
    },
    {
      "property" : "/film/film/film_casting_director",
      "sentence form" : "obj was the casting director for subj"
    },
    {
      "property" : "/film/film/film_collections",
      "sentence form" : "subj is part of obj"
    },
    {
      "property" : "/film/film/film_festivals",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/film/film/film_production_design_by",
      "sentence form" : "obj was the production designer for subj"
    },
    {
      "property" : "/film/film/film_set_decoration_by",
      "sentence form" : "obj was the set decorator for "
    },
    {
      "property" : "/film/film/genre",
      "sentence form" : "the genre for subj is obj"
    },
    {
      "property" : "/film/film/language",
      "sentence form" : "subj is in obj"
    },
    {
      "property" : "/film/film/other_crew/film/film_crew_gig/crewmember",
      "sentence form" : "obj was a crew member in subj"
    },
    {
      "property" : "/film/film/produced_by",
      "sentence form" : "subj was produced by obj"
    },
    {
      "property" : "/film/film/rating",
      "sentence form" : "subj is rated obj"
    },
    {
      "property" : "/film/film/release_date_s/film/film_regional_release_date/film_regional_debut_venue",
      "sentence form" : "subj debuted in obj"
    },
    {
      "property" : "/film/film/release_date_s/film/film_regional_release_date/film_release_region",
      "sentence form" : "subj was first shown in obj"
    },
    {
      "property" : "/film/film/release_date_s/film/film_regional_release_date/film_release_distribution_medium",
      "sentence form" : "the distribution for subj was obj"
    },
    {
      "property" : "/film/film/runtime/film/film_cut/film_release_region",
      "sentence form" : "subj was released in obj"
    },
    {
      "property" : "/film/film/runtime/film/film_cut/type_of_film_cut",
      "sentence form" : "there is a obj of subj"
    },
    {
      "property" : "/film/film/soundtrack",
      "sentence form" : "obj is the soundtrack of subj"
    },
    {
      "property" : "/film/film/starring/film/performance/actor",
      "sentence form" : "obj acted in subj"
    },
    {
      "property" : "/film/film/starring/film/performance/character",
      "sentence form" : "obj acted in subj"
    },
    {
      "property" : "/film/film/story_by",
      "sentence form" : "subj is a story by obj"
    },
    {
      "property" : "/film/film/written_by",
      "sentence form" : "subj was written by obj"
    },
    {
      "property" : "/media_common/netflix_title/netflix_genres",
      "sentence form" : "subj is in the Netflix genre of obj"
    },
    {
      "property" : "/biology/animal_owner/animals_owned/biology/animal_ownership/animal",
      "sentence form" : "subj has a pet named obj"
    },
    {
      "property" : "/book/author/works_written",
      "sentence form" : "subj is the author of obj"
    },
    {
      "property" : "/celebrities/celebrity/celebrity_rivals/celebrities/rivalry/rival",
      "sentence form" : "obj is a rival of subj"
    },
    {
      "property" : "/celebrities/celebrity/net_worth/measurement_unit/dated_money_value/currency",
      "sentence form" : "obj is the currency subj gets paid in"
    },
    {
      "property" : "/celebrities/celebrity/sexual_relationships/celebrities/romantic_relationship/celebrity",
      "sentence form" : "obj has been in a relationship with subj"
    },
    {
      "property" : "/celebrities/celebrity/sexual_relationships/celebrities/romantic_relationship/relationship_type",
      "sentence form" : "obj is a type of relationship for obj"
    },
    {
      "property" : "/fictional_universe/person_in_fiction/representations_in_fiction",
      "sentence form" : "obj represents subj"
    },
    {
      "property" : "/medicine/notable_person_with_medical_condition/condition",
      "sentence form" : "obj is a condition subj has"
    },
    {
      "property" : "/people/person/employment_history/business/employment_tenure/company",
      "sentence form" : "subj has been managed by obj"
    },
    {
      "property" : "/people/person/quotations",
      "sentence form" : "obj is a famous quotation by subj"
    },
    {
      "property" : "/people/person/religion",
      "sentence form" : "obj is a subj"
    },
    {
      "property" : "/symbols/name_source/namesakes",
      "sentence form" : "obj is subj"
    },
    {
      "property" : "/symbols/namesake/named_after",
      "sentence form" : "subj was named after obj"
    },
    {
      "property" : "/tv/tv_actor/guest_roles/tv/tv_guest_role/character",
      "sentence form" : "obj was a guest role character by subj"
    },
    {
      "property" : "/tv/tv_subject/tv_episodes",
      "sentence form" : "obj has been in many tv episodes by subj"
    },
    {
      "property" : "/business/business_location/parent_company",
      "sentence form" : "obj has a branch in subj"
    },
    {
      "property" : "/fictional_universe/fictional_setting/characters_that_have_lived_here",
      "sentence form" : "obj has lived in subj"
    },
    {
      "property" : "/fictional_universe/fictional_setting/fictional_characters_born_here",
      "sentence form" : "obj was born in subj"
    },
    {
      "property" : "/fictional_universe/fictional_setting/universe",
      "sentence form" : "obj was set in subj"
    },
    {
      "property" : "/government/governmental_jurisdiction/government_bodies",
      "sentence form" : "obj is a government body of subj"
    },
    {
      "property" : "/location/capital_of_administrative_division/capital_of/location/administrative_division_capital_relationship/administrative_division",
      "sentence form" : "subj is in obj"
    },
    {
      "property" : "/location/citytown/postal_codes",
      "sentence form" : "obj is a postal code in subj"
    },
    {
      "property" : "/location/location/adjoin_s/location/adjoining_relationship/adjoins",
      "sentence form" : "obj is near subj"
    },
    {
      "property" : "/location/location/partially_containedby",
      "sentence form" : "obj is in subj"
    },
    {
      "property" : "/tv/tv_location/tv_shows_filmed_here",
      "sentence form" : "obj was filmed in subj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/basic_title",
      "sentence form" : "subj is obj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/office_position_or_title",
      "sentence form" : "subj is obj"
    },
    {
      "property" : "/organization/organization_member/member_of/organization/organization_membership/organization",
      "sentence form" : "subj is a member of obj"
    },
    {
      "property" : "/people/person/education/education/education/degree",
      "sentence form" : "subj has a obj degree"
    },
    {
      "property" : "/people/person/education/education/education/major_field_of_study",
      "sentence form" : "subj studied obj"
    },
    {
      "property" : "/people/person/employment_history/business/employment_tenure/title",
      "sentence form" : "obj is the title of subj"
    },
    {
      "property" : "/architecture/building_occupant/buildings_occupied/architecture/occupancy/building",
      "sentence form" : "subj is a resident of obj"
    },
    {
      "property" : "/book/author/book_editions_published",
      "sentence form" : "subj published obj"
    },
    {
      "property" : "/book/book_character/appears_in_book",
      "sentence form" : "subj appears in the book obj"
    },
    {
      "property" : "/broadcast/producer/location",
      "sentence form" : "subj was a producer in obj"
    },
    {
      "property" : "/broadcast/producer/produces",
      "sentence form" : "subj has produced obj"
    },
    {
      "property" : "/business/employer/employees/business/employment_tenure/person",
      "sentence form" : "obj has worked with subj"
    },
    {
      "property" : "/celebrities/celebrity/sexual_orientation/celebrities/sexual_orientation_phase/sexual_orientation",
      "sentence form" : "the sexual orientation of subj is obj"
    },
    {
      "property" : "/common/topic/subject_of",
      "sentence form" : "subj is the subject of obj"
    },
    {
      "property" : "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/presented_work",
      "sentence form" : "subj participated in the obj"
    },
    {
      "property" : "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/type_or_format_of_presentation",
      "sentence form" : "subj gave a obj"
    },
    {
      "property" : "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/event",
      "sentence form" : "subj delivered the obj"
    },
    {
      "property" : "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/speech_topic",
      "sentence form" : "subj is pushing obj"
    },
    {
      "property" : "/government/political_appointer/appointees/government/government_position_held/governmental_body",
      "sentence form" : "subj is the obj"
    },
    {
      "property" : "/government/political_appointer/appointees/government/government_position_held/office_holder",
      "sentence form" : "subj works with obj"
    },
    {
      "property" : "/government/political_appointer/appointees/government/government_position_held/office_position_or_title",
      "sentence form" : "subj works with obj"
    },
    {
      "property" : "/government/political_appointer/appointees/government/government_position_held/basic_title",
      "sentence form" : "obj is a basic title for subj"
    },
    {
      "property" : "/government/politician/election_campaigns",
      "sentence form" : "subj went on the obj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/governmental_body",
      "sentence form" : "subj held a position in the obj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/jurisdiction_of_office",
      "sentence form" : "subj held a position in obj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/district_represented",
      "sentence form" : "subj held a position in obj"
    },
    {
      "property" : "/government/politician/government_positions_held/government/government_position_held/legislative_sessions",
      "sentence form" : "subj was a member of obj"
    },
    {
      "property" : "/government/politician/legislative_committees_served_on/government/legislative_committee_membership/committee",
      "sentence form" : "subj was part of obj"
    },
    {
      "property" : "/government/politician/legislative_committees_served_on/government/legislative_committee_membership/session",
      "sentence form" : "subj was a member of obj"
    },
    {
      "property" : "/government/politician/party/government/political_party_tenure/party",
      "sentence form" : "subj is a member of obj"
    },
    {
      "property" : "/government/polled_entity/poll_scores/government/election_poll_score/poll",
      "sentence form" : "subj appeared in the obj"
    },
    {
      "property" : "/government/us_president/vice_president",
      "sentence form" : "obj is vice president to obj"
    },
    {
      "property" : "/people/appointer/appointment_made/people/appointment/appointed_role",
      "sentence form" : "subj appointed the subj"
    },
    {
      "property" : "/people/appointer/appointment_made/people/appointment/appointee",
      "sentence form" : "subj appointed subj"
    },
    {
      "property" : "/people/person/education/education/education/specialization",
      "sentence form" : "subj is a specialist in obj"
    },
    {
      "property" : "/visual_art/art_subject/artwork_on_the_subject",
      "sentence form" : "obj is art about subj"
    },
    {
      "property" : "/amusement_parks/ride_theme/rides",
      "sentence form" : "obj is a ride about subj"
    },
    {
      "property" : "/biology/breed_origin/breeds_originating_here",
      "sentence form" : "the breed obj originated in subj"
    },
    {
      "property" : "/cvg/computer_game_region/versions_released_in_this_region",
      "sentence form" : "obj was released in subj"
    },
    {
      "property" : "/cvg/cvg_publisher/games_published",
      "sentence form" : "obj was published in subj"
    },
    {
      "property" : "/exhibitions/exhibition_sponsor/exhibitions_sponsored/exhibitions/exhibition_run/exhibition",
      "sentence form" : "obj was an exhibition in subj"
    },
    {
      "property" : "/exhibitions/exhibition_sponsor/exhibitions_sponsored/exhibitions/exhibition_run/venue",
      "sentence form" : "obj is a venue in subj"
    },
    {
      "property" : "/food/beer_country_region/beers_from_here",
      "sentence form" : "subj is where obj is from"
    },
    {
      "property" : "/government/governmental_jurisdiction/agencies",
      "sentence form" : "obj is an agency in subj"
    },
    {
      "property" : "/government/governmental_jurisdiction/governing_officials/government/government_position_held/basic_title",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/government/governmental_jurisdiction/governing_officials/government/government_position_held/office_holder",
      "sentence form" : "subj is the monarch of obj"
    },
    {
      "property" : "/government/governmental_jurisdiction/governing_officials/government/government_position_held/office_position_or_title",
      "sentence form" : "obj is an important position in subj"
    },
    {
      "property" : "/government/governmental_jurisdiction/governing_officials/government/government_position_held/governmental_body",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/government/governmental_jurisdiction/government",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/government/governmental_jurisdiction/government_positions",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/law/court_jurisdiction_area/courts",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/location/country/administrative_divisions",
      "sentence form" : "obj is in subj"
    },
    {
      "property" : "/location/country/capital",
      "sentence form" : "obj is in subj"
    },
    {
      "property" : "/location/country/currency_used",
      "sentence form" : "obj is the currency of subj"
    },
    {
      "property" : "/location/country/form_of_government",
      "sentence form" : "subj has a obj"
    },
    {
      "property" : "/location/country/internet_tld",
      "sentence form" : "obj is the internet ID of subj"
    },
    {
      "property" : "/location/country/languages_spoken",
      "sentence form" : "obj is spoken in subj"
    },
    {
      "property" : "/location/country/national_anthem/government/national_anthem_of_a_country/anthem",
      "sentence form" : "obj is the national anthem of subj"
    },
    {
      "property" : "/location/country/official_language",
      "sentence form" : "obj is spoken in subj"
    },
    {
      "property" : "/location/location/partially_contains",
      "sentence form" : "obj are in subj"
    },
    {
      "property" : "/location/statistical_region/fertility_rate/measurement_unit/dated_float/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/gdp_growth_rate/measurement_unit/dated_percentage/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/gdp_nominal/measurement_unit/dated_money_value/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/internet_users_percent_population/measurement_unit/dated_percentage/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/life_expectancy/measurement_unit/dated_float/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/major_exports/location/imports_exports_by_industry/industry",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/military_expenditure_percent_gdp/measurement_unit/dated_percentage/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/places_exported_to/location/imports_and_exports/currency",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/location/statistical_region/places_exported_to/location/imports_and_exports/exported_to",
      "sentence form" : "subj exports to obj"
    },
    {
      "property" : "/location/statistical_region/places_imported_from/location/imports_and_exports/currency",
      "sentence form" : "obj is the currency of subj"
    },
    {
      "property" : "/location/statistical_region/places_imported_from/location/imports_and_exports/imported_from",
      "sentence form" : "subj imports from subj"
    },
    {
      "property" : "/location/statistical_region/population/measurement_unit/dated_integer/source",
      "sentence form" : "subj appears in obj"
    },
    {
      "property" : "/military/military_combatant/armed_forces",
      "sentence form" : "obj are the armed forces of subj"
    },
    {
      "property" : "/military/military_combatant/casualties/military/casualties/combatant",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/casualties/military/casualties/military_conflict",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/casualties/military/casualties/type_of_casualties",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/force_deployments/military/force_strength/military_conflict",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/military_commanders/military/military_command/military_commander",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/military_commanders/military/military_command/military_conflict",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/military_conflicts/military/military_combatant_group/combatants",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/military/military_combatant/military_conflicts/military/military_combatant_group/conflict",
      "sentence form" : "obj features in the military history of subj"
    },
    {
      "property" : "/olympics/olympic_athlete_affiliation/athlete",
      "sentence form" : "obj is from subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/athletes/olympics/olympic_athlete_affiliation/athlete",
      "sentence form" : "obj is from subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/athletes/olympics/olympic_athlete_affiliation/olympics",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/olympics/olympic_participating_country/athletes/olympics/olympic_athlete_affiliation/sport",
      "sentence form" : "obj is practiced in subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/event",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/medal",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/medalist",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/olympics",
      "sentence form" : "subj appeared in obj"
    },
    {
      "property" : "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/event",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/medal",
      "sentence form" : "obj was part of subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/medalist",
      "sentence form" : "obj is from subj"
    },
    {
      "property" : "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/olympics",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/olympics/olympic_participating_country/olympics_participated_in",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/royalty/kingdom/rulers",
      "sentence form" : "obj was a ruler of subj"
    },
    {
      "property" : "/sports/sport_country/athletes/sports/competitor_country_relationship/competitor",
      "sentence form" : "obj was a competitor from subj"
    },
    {
      "property" : "/sports/sport_country/athletes/sports/competitor_country_relationship/sports",
      "sentence form" : "obj is a sport played in subj"
    },
    {
      "property" : "/sports/sport_country/athletes/sports/competitor_country_relationship/tournament",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/competition",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/competitors",
      "sentence form" : "obj was a competitor from subj"
    },
    {
      "property" : "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/medal",
      "sentence form" : "obj was a prize awarded to subj"
    },
    {
      "property" : "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/tournament",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/sports/sport_country/multi_event_tournaments_participated_in",
      "sentence form" : "subj participated in obj"
    },
    {
      "property" : "/symbols/coat_of_arms_bearer/coat_of_arms_used/symbols/armorial_grant/coat_of_arms",
      "sentence form" : "obj is s symbol in subj"
    }
  ,
  {
    "sentence form": "subj is from obj",
    "property": "/astronomy/meteor_shower/source_of_meteor_shower",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/astronomy/meteorite/source_celestial_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/biology/animal_breed/place_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/biology/fossil_specimen/found_at_site",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/biology/organism/place_of_birth",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/boats/ship/place_built",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/book/book_edition/place_of_publication",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/book/technical_report/place_of_publication",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/dining/cuisine/region_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/education/fraternity_sorority/founded_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/film/film/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/beer/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/beer/from_region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/bottled_water/source",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/cheese/country_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/cheese/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/tea/regions_where_grown",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/food/wine_style/place_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/games/game/origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/geography/lake/inflow",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/martial_arts/martial_art/origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/military/military_unit/place_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/music/artist/origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/music/composition/place_composed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/music/recording/place",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/organization/organization/place_founded",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/people/family/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/people/person/place_of_birth",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/royalty/system_of_nobility/country_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/spaceflight/rocket/country_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/theater/play/country_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/tv/tv_program/country_of_origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/wine/wine/appellation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/wine/wine/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/wine/wine/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/wine/wine/vineyard",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/wine/wine/wine_sub_region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/book/journal/place_of_publication/book/place_of_publication_period/place_of_publication",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/book/magazine/place_of_publication/book/place_of_publication_period/place_of_publication",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/freebase/user_profile/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/freebase/user_profile/hometown",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  },
  {
    "sentence form": "subj is from obj",
    "property": "/organization/organization/headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasplaceoforigin"
  }
,


  {
    "sentence form": "obj is from subj",
    "property": "/astronomy/comet/meteor_shower_spawned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/astronomy/meteorite_source/meteorites",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/biology/breed_origin/breeds_originating_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/biology/fossil_site/specimens_found_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/food/beer_country_region/beers_from_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/wine/wine_region/wine_styles",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/military/military_unit_place_of_origin/military_units",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/location/location/people_born_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/wine/appellation/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/wine/wine_region/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/wine/vineyard/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/wine/wine_sub_region/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  },
  {
    "sentence form": "obj is from subj",
    "property": "/spaceflight/rocket_launch_site/missions_launched_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/placeoforiginof"
  }
  ,


  {
    "sentence form": "subj portrayed obj",
    "property": "/cvg/game_voice_actor/computer_game_voice_performances/cvg/game_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/film/actor/dubbing_performances/film/dubbing_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/film/actor/film/film/performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/music/opera_singer/opera_roles/opera/opera_role/role",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/theater/theater_actor/theater_roles/theater/theater_role/role",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/tv/tv_actor/guest_roles/tv/tv_guest_role/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/tv/tv_actor/tv_segment_performances/tv/tv_segment_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  },
  {
    "sentence form": "subj portrayed obj",
    "property": "/music/music_video_performer/music_video_performances/music/music_video_performance/music_video_character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayed"
  }
,


  {
    "sentence form": "obj was portrayed by subj",
    "property": "/cvg/game_character/games/cvg/game_performance/voice_actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/film/film_character/portrayed_in_films_dubbed/film/dubbing_performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/film/film_character/portrayed_in_films/film/performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/opera/opera_character/portrayed_by/opera/opera_role/performer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/theater/theater_character/portrayed_by/theater/theater_role/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/tv/tv_character/appeared_in_tv_program/tv/regular_tv_appearance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/tv/tv_character/appeared_in_tv_episodes/tv/tv_guest_role/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/tv/tv_character/appeared_in_tv_episode_segments/tv/tv_segment_performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  },
  {
    "sentence form": "obj was portrayed by subj",
    "property": "/music/music_video_character/portrayed_in_music_videos/music/music_video_performance/music_video_performer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/portrayedby"
  }
  ,


  {
    "sentence form": "subj is a type of obj",
    "property": "/book/book_edition/dewey_decimal_number",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/bottled_water/water_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/rail/locomotive_class/uic_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/galactic_interaction/interaction_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/celebrities/romantic_relationship/relationship_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/cvg/game_performance/performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/film/film_cut/type_of_film_cut",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/film/performance/special_performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/film/personal_film_appearance/type_of_appearance",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/interests/collection/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/military/casualties/type_of_casualties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/people/marriage/type_of_union",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/spaceflight/satellite_orbit_asynchronous/orbit_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/spaceflight/satellite_orbit_synchronous/orbit_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tennis/tennis_match/match_format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tv/regular_tv_appearance/special_performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tv/tv_guest_role/special_performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tv/tv_segment_performance/special_performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tv/tv_segment_personal_appearance/appearance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/tv/video/video_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/amusement_parks/ride/ride_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/amusement_parks/roller_coaster/propulsion",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/amusement_parks/roller_coaster/train_configuration",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/architecture/building/building_function",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/architecture/museum/type_of_museum",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/asteroid/spectral_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/celestial_object/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/star/spectral_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/extraterrestrial_location/type_of_planetographic_feature",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/galaxy_classification_code/galaxy_shape",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/galaxy/galaxy_classification_hubble",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/near_earth_object/near_earth_object_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/orbital_relationship/orbit_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/telescope/type_of_telescope",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/automotive/model/automotive_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/automotive/transmission/classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/aviation/aircraft_model/aircraft_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/aviation/airliner_accident/accident_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/aviation/airport/airport_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/aviation/aviation_waypoint/waypoint_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/award/competition/type_of_competition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/bicycles/bicycle_model/bicycle_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/pedigreed_animal/breed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/fossil_specimen/organism",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/gene_ontology_group/group_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/organism_classification/rank",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/organism/organism_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/organism/sex",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/boats/ship_class/ship_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/boats/ship/ship_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/book/book_edition/binding",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/book/poem/verse_form",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/book/short_non_fiction/mode_of_writing",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/business/issue/type_of_issue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/chemistry/chemical_compound/classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/chemistry/chemical_element/periodic_table_block",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/chemistry/chemical_element/chemical_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/computer_peripheral/peripheral_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/file_format/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/conferences/conference_series/type_of_conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/cricket/cricket_match/match_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/cvg/computer_videogame/gameplay_modes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/digicams/digital_camera/format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/distilled_spirits/blended_spirit/style",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/distilled_spirits/distilled_spirit/spirit_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/distilled_spirits/infused_spirit/infusion_style",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/education/educational_institution/school_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/education/fraternity_sorority/fraternity_sorority_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/battery_size/shape_format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/battery/cell_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/battery/size",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/engine/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/piston_engine/cooling_method",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/piston_engine/fuel_delivery_method",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/piston_engine/piston_configuration",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/piston_engine/valvetrain_configuration",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/power_plug_standard/plug_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/event/disaster/type_of_disaster",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/fashion/textile/weave",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/fictional_universe/fictional_setting/setting_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/film/film/film_format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/beer_style/bjcp_style_category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/beer/beer_style",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/cheese/texture",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/drinking_establishment/drinking_establishment_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/tea/tea_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/food/dish/type_of_dish1",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/wine/wine/wine_style",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/geographical_feature/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/glacier/glacier_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/lake/lake_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/mountain/listings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/mountain/mountain_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/waterfall/waterfall_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/interests/collectable_item/collection_category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/internet/top_level_domain/domain_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/language/conlang/conlang_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/language/language_writing_system/type_of_writing",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/law/us_patent/international_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/law/us_patent/us_classification_category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategory"
  }
,


  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/galactic_interaction_type/galaxy_s_interacting_this_way",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/cvg/computer_game_performance_type/performances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/film/special_film_performance_type/film_performance_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/film/personal_film_appearance_type/film_appearances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/interests/collection_category/collectors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/military/casualties_type/conflicts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/people/marriage_union_type/unions_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/spaceflight/satellite_orbit_type/asynchronous_satellites",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/spaceflight/satellite_orbit_type/synchronous_satellites",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/tv/special_tv_performance_type/starring_performances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/tv/special_tv_performance_type/episode_performances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/tv/special_tv_performance_type/segment_performances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/tv/non_character_role/episode_segment_appearances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/amusement_parks/ride_type/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/amusement_parks/roller_coaster_propulsion_system/roller_coasters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/amusement_parks/roller_coaster_train_configuration/roller_coasters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/architecture/building_function/buildings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/architecture/type_of_museum/museums",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/asteroid_spectral_type/asteroids_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/celestial_object_category/objects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/spectral_type/celestial_objects_of_this_spectral_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/type_of_planetographic_feature/planetographic_features_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/galactic_shape/galaxies_of_this_shape",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/galaxy_classification_code/galaxies_of_this_code",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/near_earth_object_classification/near_earth_objects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/orbit_type/orbiting_bodies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/astronomy/telescope_type/telescopes_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/automotive/automotive_class/examples",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/automotive/transmission_type/transmissions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/aviation/aircraft_type/aircraft_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/aviation/accident_type/aircraft_accidents_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/aviation/airport_type/airports_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/aviation/waypoint_type/waypoints_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/award/competition_type/competitions_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/bicycles/bicycle_type/bicycle_models_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/biology/animal_breed/examples",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/biology/organism_classification/fossil_specimens",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/biology/gene_ontology_group_type/group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/biology/organism_classification_rank/organism_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/biology/organism_classification/organisms_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/boats/ship_type/ship_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/boats/ship_class/ships_in_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/book/poetic_verse_form/poems_of_this_form",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/book/short_non_fiction_variety/works",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/business/issue_type/issues_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/chemistry/chemical_classification/chemicals_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/chemistry/periodic_table_block/elements",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/chemistry/chemical_series/elements",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/computer/computer_peripheral_class/products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/computer/file_format_genre/file_formats",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/conferences/type_of_conference/conferences_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/cvg/gameplay_mode/games_with_this_mode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/digicams/camera_format/cameras",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/distilled_spirits/blended_spirit_style/blends",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/distilled_spirits/distilled_spirit_type/spirits",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/distilled_spirits/infused_spirit_style/infusions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/education/school_category/schools_of_this_kind",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/education/fraternity_sorority_type/fraternities_and_sororities",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/battery_shape_format/battery_sizes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/battery_cell_type/batteries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/battery_size/batteries_of_this_size",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/engine_category/engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/engine_cooling_method/engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/fuel_delivery_method/engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/piston_configuration/engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/valvetrain_configuration/engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/engineering/power_plug_standard_type/plug_standards",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/event/disaster_type/disasters_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/fashion/weave/textiles_of_this_weave",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/fictional_universe/type_of_fictional_setting/settings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/film/film_format/film_format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/beer_style_category/styles",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/beer_style/beers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/cheese_texture/cheeses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/drinking_establishment_type/establishments_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/tea_type/tea",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/type_of_dish/dishes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/food/wine_style/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/geography/geographical_feature_category/features",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/geography/lake_type/lakes_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/geography/mountain_listing/mountains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/geography/mountain_type/mountains_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/geography/waterfall_type/waterfalls",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/interests/collection_category/items_in_this_category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/internet/top_level_domain_type/domains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/language/conlang_purpose/languages_of_this_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/language/language_writing_type/writing_systems",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/law/international_patent_category/patents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/law/us_patent_category/patents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/law/us_patent_type/patents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/government/form_of_government/countries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/martial_arts/martial_art_category/martial_arts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/cancer_center_type/centers_of_this_kind",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/drug_class/drugs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/type_of_infectious_agent/diseases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/medical_trial_design/trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/medical_trial_phase/medical_trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/medicine/medical_trial_type/medical_trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/meteorology/cloud_classification/clouds",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  },
  {
    "sentence form": "obj is a type subj",
    "property": "/meteorology/tropical_cyclone_category/tropical_cyclones",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascategorymember"
  }
  ,


  {
    "sentence form": "subj controls obj",
    "property": "/aviation/airport_operator/airports_operated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/award/award_presenting_organization/award_categories_presented",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/award/award_presenting_organization/awards_presented",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/biology/breed_registry/breed_groups",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/conferences/conference_sponsor/conferences",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/cricket/cricket_administrative_body/competitions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/cricket/cricket_umpire_panel/administrator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/cvg/computer_game_rating_system/ratings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/newspaper",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/radio_station",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/school_magazines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/sports_teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/film/content_rating_system/film_ratings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/internet/top_level_domain_registry/domains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/language/language_regulator/language",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/medicine/medical_trial_health_authority/medical_trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/medicine/medical_trial_sponsor/trials_sponsored",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/meteorology/meteorological_service/tropical_cyclone_categories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/metropolitan_transit/transit_agency/systems",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/protected_sites/natural_or_cultural_preservation_agency/natural_or_cultural_listings_maintained",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/protected_sites/governing_body_of_protected_sites/protected_sites_governed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/religion/religious_organization/jurisdictions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/soccer/fifa/leagues_governed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/spaceflight/space_agency/spaceports",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/spaceflight/space_program_sponsor/space_programs_sponsored",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/tv/tv_rating_system/tv_ratings",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/biology/breed_registry/recognized_breeds/biology/breed_registration/breed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/biology/breed_registry/recognized_breeds/biology/breed_registration/breed_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/students_graduates/education/education/degree",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/education/educational_institution/honorary_degrees_awarded/education/honorary_degree/degree",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/martial_arts/martial_arts_organization/qualifications_awarded/martial_arts/martial_arts_certification/qualification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/rail/railway_operator/railways/rail/railway_operator_relationship/railway",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/religion/religious_organization/leaders/religion/religious_organization_leadership/jurisdiction",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/symbols/heraldry_granting_body/coats_of_arms_granted/symbols/armorial_grant/coat_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/exhibitions/exhibition_sponsor/exhibitions_sponsored/exhibitions/exhibition_run/exhibition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/exhibitions/exhibition_producer/exhibitions_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/law/legal_case/court",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/travel/hotel_operator/hotels_operated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/medicine/drug_regulating_authority/pregnancy_categories_regulated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  },
  {
    "sentence form": "subj controls obj",
    "property": "/base/schemastaging/educational_institution_extra/libraries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administers"
  }
,


  {
    "sentence form": "obj is controled by",
    "property": "/aviation/airport/operator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/award/award_category/presenting_organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/award/award/presented_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/biology/breed_group/breed_registry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/conferences/conference_series/sponsoring_organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/cvg/computer_game_rating/rating_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/education/school_newspaper/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/education/student_radio_station/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/education/school_magazine/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/sports/school_sports_team/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/film/content_rating/film_rating_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/internet/top_level_domain/registry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/medicine/medical_trial/health_authority",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/medicine/medical_trial/sponsor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/meteorology/tropical_cyclone_category/meteorological_service",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/metropolitan_transit/transit_system/agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/protected_sites/natural_or_cultural_site_designation/listing_agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/protected_sites/protected_site/governing_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/religion/religious_leadership_jurisdiction/organisation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/soccer/football_league/governing_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/spaceflight/rocket_launch_site/controlling_country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/spaceflight/rocket_launch_site/operated_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/spaceflight/space_program/sponsor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/tv/tv_rating/tv_rating_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/biology/animal_breed/registered_with/biology/breed_registration/registry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/biology/breed_group/breeds_in_this_group/biology/breed_registration/registry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/education/educational_degree/people_with_this_degree/education/education/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/education/educational_degree/honorary_degree_recipients/education/honorary_degree/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/martial_arts/martial_arts_qualification/martial_artists/martial_arts/martial_arts_certification/certifying_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/organization/non_profit_designation/organizations_with_this_designation/organization/non_profit_registration/registering_agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/rail/railway/operator_s/rail/railway_operator_relationship/operator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/religion/religious_leadership_jurisdiction/leader/religion/religious_organization_leadership/organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/symbols/coat_of_arms/bearers/symbols/armorial_grant/granted_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/exhibitions/exhibition/produced_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/exhibitions/exhibition/venues/exhibitions/exhibition_run/sponsor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/law/court/legal_cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/travel/hotel/operated_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/medicine/drug_pregnancy_category/regulating_authority",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  },
  {
    "sentence form": "obj is controled by",
    "property": "/base/schemastaging/scholastic_library/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/administeredby"
  }
  ,


  {
    "sentence form": "subj occurs in obj",
    "property": "/language/human_language/countries_spoken_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/language/human_language/main_country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/language/human_language/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/language/language_family/geographic_distribution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/people/chinese_ethnic_group/autonomous_counties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/people/chinese_ethnic_group/autonomous_prefectures",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/people/chinese_ethnic_group/autonomous_regions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/medicine/medical_trial/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/people/american_indian_group/us_indian_reservations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/people/ethnicity/geographic_distribution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  },
  {
    "sentence form": "subj occurs in obj",
    "property": "/base/schemastaging/fish/found_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/occursin"
  }
,


  {
    "sentence form": "subj produced obj",
    "property": "/automotive/make/model_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/aviation/aircraft_manufacturer/aircraft_models_made",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/bicycles/bicycle_manufacturer/bicycle_models",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/boats/ship_builder/ships_built",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/book/publishing_company/books_published",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/book/report_issuing_institution/technical_reports_issued",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/broadcast/distributor/distributes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/broadcast/producer/produces",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/comic_books/comic_book_publisher/comic_book_series_published",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/computer/computer_manufacturer_brand/computer_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/computer/processor_manufacturer/processors_manufactured",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/computer/computer_manufacturer_brand/computer_models",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/cvg/cvg_publisher/games_published",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/cvg/cvg_publisher/game_versions_published",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/digicams/camera_sensor_manufacturer/cameras",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/digicams/digital_camera_manufacturer/cameras",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/distilled_spirits/spirit_bottler/spirits_bottled",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/distilled_spirits/distillery/spirits",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/distilled_spirits/spirit_blender/infusions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/distilled_spirits/spirit_blender/blends",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/food/brewery_brand_of_beer/beers_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/food/candy_bar_manufacturer/candy_bars",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/music/record_label/releases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/rail/locomotive_builder/locomotive_classes_built",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/spaceflight/rocket_engine_manufacturer/rocket_engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/spaceflight/rocket_manufacturer/rockets_manufactured",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/spaceflight/satellite_manufacturer/spacecraft_manufactured",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/theater/theater_company/plays_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/wine/wine_producer/wines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/book/periodical_publisher/periodicals_published/book/periodical_publisher_period/periodical",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/business/consumer_company/product_lines/business/company_product_line_relationship/product_line",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/business/consumer_company/products/business/company_product_relationship/consumer_product",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/comic_strips/comic_strip_syndicate/comic_strips_syndicated/comic_strips/comic_strip_syndicate_duration/comic_strip",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/games/game_publisher/games_published",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/skiing/ski_lift_manufacturer/ski_lifts/skiing/lift_tenure/ski_lift",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  },
  {
    "sentence form": "subj produced obj",
    "property": "/medicine/drug_manufacturer/drugs_manufactured",
    "metaschema": "/base/fbontology/metaschema/predicate_id/produced"
  }
  ,


  {
    "sentence form": "subj is produced by obj",
    "property": "/automotive/generation/manufacturing_plant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/automotive/model/make",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/aviation/aircraft_model/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/bicycles/bicycle_model/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/boats/nuclear_powerplant/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/boats/ship/ship_builder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/book/book_edition/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/book/technical_report/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/broadcast/broadcast/distributor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/broadcast/content/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/comic_books/comic_book_series/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/computer/computer_processor/manufacturers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/computer/computer/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/cvg/computer_videogame/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/cvg/game_version/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/digicams/digital_camera/camera_sensor_manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/digicams/digital_camera/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/distilled_spirits/distilled_spirit/bottler",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/distilled_spirits/distilled_spirit/distillery",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/distilled_spirits/infused_spirit/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/distilled_spirits/blended_spirit/blender",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/food/beer/brewery_brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/food/candy_bar/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/medicine/drug_brand/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/music/guitar/brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/music/release/label",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/music/synthesizer/brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/rail/locomotive_class/built_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/spaceflight/rocket_engine/manufactured_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/spaceflight/rocket/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/spaceflight/spacecraft/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/theater/theater_production/producing_company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/wine/wine/wine_producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/boats/ship_powerplant/engine_type/boats/engine/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/book/periodical/publisher/book/periodical_publisher_period/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/business/product_line/producer_s/business/company_product_line_relationship/company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/business/consumer_product/company/business/company_product_relationship/company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/comic_strips/comic_strip/syndicate/comic_strips/comic_strip_syndicate_duration/syndicate",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/games/game/publisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/skiing/ski_lift/lift_type/skiing/lift_tenure/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  },
  {
    "sentence form": "subj is produced by obj",
    "property": "/medicine/manufactured_drug_form/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/producedby"
  }
,


  {
    "sentence form": "subj is in obj",
    "property": "/amusement_parks/park/geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/amusement_parks/ride/geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteorite/meteorite_discovery_geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteorite/meteorite_fall_geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/river/mouth_long_lat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/river/origin_long_lat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/location/geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo/geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/location/geometry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/architecture/landscape_project/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/architecture/museum/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/architecture/structure/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/extraterrestrial_location/geolocation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/award/hall_of_fame/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/business/business_location/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/business/shopping_center/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/library/public_library/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/location/street_address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/medicine/cancer_center/mailing_address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/medicine/hospital/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/religion/religious_organization/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/sports/golf_facility/address",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/amusement_parks/park/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/asterism/constellations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteor_shower/radiant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/extraterrestrial_location/on_celestial_object",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/galaxy/constellation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteorite/institutional_specimen_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteorite/meteorite_discovery_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/meteorite/meteorite_fall_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/star_system/constellation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/star/constellation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/telescope/housed_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/trans_neptunian_object/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/automotive/manufacturing_plant/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/biology/cytogenetic_band/chromosome",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/biology/deceased_organism/place_of_death",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/biology/gene/chromosome",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/broadcast/producer/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/business/business_location/in_shopping_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/cricket/cricket_team/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/distilled_spirits/distillery/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/education/educational_institution/campuses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/transportation/bridge/body_of_water_spanned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/island/body_of_water",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/river/mouth",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/river/origin",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/organization/organization/locations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/people/canadian_aboriginal_group/canadian_indian_reserves",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/people/deceased_person/place_of_burial",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/religion/religious_order/monasteries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/religion/religious_organization/building",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/spaceflight/rocket_launch_site/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/spaceflight/satellite/launch_site",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/time/time_zone/locations_in_this_time_zone",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/transportation/bridge/locale",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/celebrities/celebrity/legal_entanglements/celebrities/legal_entanglement/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/military/military_person/postings/military/military_posting/post",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/people/person/places_lived/people/place_lived/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/visual_art/artwork/locations/visual_art/artwork_location_relationship/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo_animal/zoos/zoos/animal_captivity/exhibit",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo_animal/zoos/zoos/animal_captivity/zoo",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/australian_suburb/postal_code",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/law/court/courthouse/law/court_courthouse_relationship/courthouse",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/skiing/ski_area/closest_city",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/mailing_address/citytown",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/mailing_address/state_province_region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/mailing_address/postal_code",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/mailing_address/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/location/partially_contains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haslocation"
  }
  ,


  {
    "sentence form": "subj is in obj",
    "property": "/location/geometry/delineates_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/planetographic_coordinate/extraterrestrial_location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/constellation/meteor_showers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/celestial_object/locations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/constellation/galaxies_observed_in_constellation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/constellation/contains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/astronomical_observatory/telescope_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/astronomy/trans_neptunian_region/trans_neptunian_objects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/biology/chromosome/band",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/biology/chromosome/gene",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/business/shopping_center/store",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/distilled_spirits/spirit_producing_region/distilleries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/education/educational_institution_campus/educational_institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/film/film/locations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/body_of_water/bridges",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/body_of_water/islands",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/lake/cities",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/mountain_pass/transversed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/geography/river/cities",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/business/business_location/parent_company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/ca_indian_reserve/aboriginal_groups",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/people/place_of_interment/interred_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/religion/monastery/religious_order",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/location/location/time_zones",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/transportation/road/major_cities",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/travel/travel_destination/local_transportation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/military/military_post/people_posted_here/military/military_posting/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo_exhibit/notable_animals/zoos/animal_captivity/animal",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/zoos/zoo/notable_animals/zoos/animal_captivity/animal",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/law/courthouse/courts_sitting_here/law/court_courthouse_relationship/court",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/travel/hotel/drinking_establishments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/travel/hotel/restaurants_in_hotel",
    "metaschema": "/base/fbontology/metaschema/predicate_id/locationof"
  }
,


  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/extraterrestrial_location/contains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/biology/gene_ontology_group/part_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/book_edition_series/sub_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/literary_series/sub_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/publishing_company/imprints",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/education/department/subsidiary_departments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/education/educational_institution/subsidiary_or_constituent_schools",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/government/general_election/includes_general_elections",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/government/governmental_body/component_bodies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/internet/website/sub_web_properties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/location/contains",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/military/armed_force/sub_divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/military/military_combatant/includes_allies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/music/composition/includes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/projects/project/includes_smaller_projects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/symbols/coat_of_arms/marshalled_coats_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/time/event/includes_event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/symbols/coat_of_arms/charges",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/symbols/coat_of_arms/mantling",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/symbols/coat_of_arms/ordinaire",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/chess/chess_game/history",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/american_football/football_conference/divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/amusement_parks/park/areas",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/amusement_parks/amusement_park_area/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/amusement_parks/park/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/architecture/building_complex/buildings_in_complex",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/asterism/stars",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/asteroid_family/asteroid_family_member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/asteroid_group/asteroid_group_members",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/comet_group/comet",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/galactic_super_cluster/galaxy_clusters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/galactic_cluster/galaxy_groups",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/galactic_filament/galaxy_superclusters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/galactic_group/galaxies_in_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/star_system/planetary_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/astronomy/star_system/stars",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/automotive/option_package/options",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/automotive/trim_level/engine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/automotive/trim_level/transmission",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/baseball/baseball_league/divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/basketball/basketball_conference/divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/biology/genome/gene",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/book_edition_series/editions_in_this_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/excerpted_work/excerpts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/magazine/issues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/newspaper/issues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/serialized_work/serial_installments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/book/literary_series/works_in_this_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/comic_books/comic_book_series/final_issue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/comic_books/comic_book_series/first_issue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/comic_books/comic_book_series/issues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/comic_books/comic_book_story_arc/spanning",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/computer/computer/processor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/computer/web_browser/layout_engine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/cricket/cricket_series_event/matches",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/cricket/cricket_tournament_event/matches",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/cvg/computer_game_compilation/games_included",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/cvg/game_series/games_in_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/cvg/computer_videogame/uses_game_engine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/education/university/departments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/film/film_series/films_in_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/film/film/featured_song",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/food/recipe_collection/recipes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/geography/island_group/islands_in_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/geography/mountain_range/passes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/government/general_election/contests",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/government/government/agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/government/governmental_body/committees",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/ice_hockey/hockey_conference/divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/law/constitution/amendments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/country/administrative_divisions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/fr_region/departments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/us_county/hud_county_place",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/place_with_neighborhoods/neighborhoods",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/location/us_county/hud_section_8_area",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/media_common/quotation_source/quotations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/medicine/cancer_center/constituents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/meteorology/tropical_cyclone_season/strongest_storm",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/meteorology/tropical_cyclone_season/tropical_cyclones",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/metropolitan_transit/transit_line/stops",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/metropolitan_transit/transit_line/terminuses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/metropolitan_transit/transit_system/transit_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/military/armed_force/military_combatant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/military/armed_force/units",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/music/concert_tour/concerts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/music/multipart_release/components",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/music/release/track",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/olympics/olympic_games/competitions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/olympics/olympic_games/demonstration_competitions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/organization/organization/committees",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/people/family/members",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/protected_sites/park_system/member_parks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/radio/radio_program_episode/segments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/radio/radio_program/episodes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/rail/rail_network/railways",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/rail/railway/branches_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/rail/railway/terminuses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/royalty/royal_line/monarchs_from_this_line",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/soccer/football_league_season/matches",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  },
  {
    "sentence form": "obj is part of subj",
    "property": "/soccer/football_league_system/leagues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haspart"
  }
  ,

  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/extraterrestrial_location/contained_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/biology/gene_ontology_group/aggregate_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/book_edition_series/part_of_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/literary_series/part_of_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/publishing_company/imprint_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/education/department/department_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/education/educational_institution/parent_institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/government/general_election/part_of_general_election",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/government/governmental_body/body_this_is_a_component_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/internet/website/parent_web_property",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/location/containedby",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/military/armed_force/sub_division_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/military/military_combatant/belongs_to_combatant_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/music/composition/part_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/projects/project/part_of_larger_project",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/symbols/coat_of_arms/marshaled_into",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/time/event/included_in_event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/symbols/heraldic_charge_color/coat_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/symbols/heraldic_mantling/coat_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/symbols/heraldic_ordinaire_color/coat_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/chess/chess_move/game",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/american_football/football_conference/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/american_football/football_division/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/american_football/football_game/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/amusement_parks/amusement_park_area/parks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/amusement_parks/ride/area",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/amusement_parks/ride/park",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/architecture/building/building_complex",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/asteroid/member_of_asteroid_family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/asteroid/member_of_asteroid_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/comet/comet_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/galactic_cluster/galaxy_supercluster",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/galactic_group/galaxy_cluster",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/galactic_super_cluster/galaxy_filament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/galaxy/galactic_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/star_system_body/star_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/astronomy/star/star_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/automotive/option/option_packages",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/automotive/engine/trim_levels",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/automotive/transmission/trim_levels",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/baseball/baseball_division/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/basketball/basketball_division/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/biology/gene/genome",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/book_edition/book_edition_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/excerpt/work_excerpted",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/magazine_issue/magazine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/newspaper_issue/newspaper",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/serial_installment/serialized_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/book/written_work/part_of_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/comic_books/comic_book_issue/part_of_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/comic_books/comic_book_story/part_of_story_arc",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/computer/computer_processor/used_in_computers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/computer/html_layout_engine/browsers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/cricket/cricket_match/series_event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/cricket/cricket_match/tournament_event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/cvg/computer_videogame/game_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/cvg/computer_game_engine/used_for_computer_games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/education/department/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/film/film/film_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/film/film_featured_song/featured_in_film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/food/recipe/part_of_recipe_collection",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/geography/island/island_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/geography/mountain_pass/range",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/government/election/general_election",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/government/government_agency/government",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/government/legislative_committee/legislature",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/ice_hockey/hockey_conference/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/ice_hockey/hockey_division/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/law/constitutional_amendment/constitution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/administrative_division/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/fr_department/region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/hud_county_place/county",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/hud_county_place/place",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/neighborhood/neighborhood_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/location/hud_section_8_area/county",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/media_common/quotation/source",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/medicine/cancer_center_constituent/cancer_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/meteorology/tropical_cyclone/tropical_cyclone_season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/metropolitan_transit/transit_stop/transit_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/metropolitan_transit/transit_stop/terminus_for_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/metropolitan_transit/transit_line/transit_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/military/military_combatant/armed_forces",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/military/military_unit/armed_force",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/music/concert/concert_tour",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/music/release_component/package",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/music/recording/releases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/olympics/olympic_event_competition/olympic_games_contested",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/olympics/olympic_demonstration_competition/olympics_contested_as_demonstration",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/organization/organization_committee/committee_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/people/family_member/family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/protected_sites/protected_site/system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/radio/radio_episode_segment/episode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/radio/radio_program_episode/program",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/rail/railway/part_of_network",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/rail/railway_terminus/railways_terminating_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/royalty/monarch/royal_line",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/soccer/football_league/league_system",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/spaceflight/space_mission/space_program",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/sports/golf_course/facility",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  },
  {
    "sentence form": "subj is part of obj",
    "property": "/sports/sports_championship_event/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/partof"
  }
,


  {
    "sentence form": "subj is made of obj",
    "property": "/business/product_ingredient/derived_from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/business/product_ingredient/ingredients",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/aviation/airport_runway/surface",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/amusement_parks/roller_coaster/material",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/architecture/lighthouse/construction",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/astronomy/meteorite/meteorite_composition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/boats/ship/hull_material",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/business/product_with_ingredients/ingredients",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/distilled_spirits/blended_spirit/components",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/distilled_spirits/distilled_spirit_type/fermentation_base",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/distilled_spirits/distilled_spirit/fermentation_base",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/distilled_spirits/infused_spirit/base_spirit",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/distilled_spirits/infused_spirit/infusion",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/food/dish/ingredients",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/food/wine_style/grape_varieties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/geology/geological_formation/type_of_rock",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/medicine/drug_brand/active_ingredients",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/visual_art/artwork/media",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/engineering/battery/chemistry/engineering/material_composition/material",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/food/food/nutrients/food/nutrition_fact/nutrient",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/food/recipe/ingredients/food/recipe_ingredient/ingredient",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/physics/hadron/composition/physics/subatomic_particle_composition/particle",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/wine/wine/grape_variety/wine/grape_variety_composition/grape_variety",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/medicine/drug_formulation/active_ingredient_moieties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  },
  {
    "sentence form": "subj is made of obj",
    "property": "/visual_art/artwork/support",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composedof"
  }
  ,


  {
    "sentence form": "obj is made of subj",
    "property": "/business/product_ingredient/derivatives",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/business/product_ingredient/used_in_other_ingredients",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/aviation/airport_runway_surface/runways",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/amusement_parks/roller_coaster_material/roller_coasters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/architecture/lighthouse_construction_material/used_on_lighthouse",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/astronomy/meteoric_composition/meteorites",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/business/product_ingredient/used_in_products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/distilled_spirits/distilled_spirit_type/blends",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/distilled_spirits/fermentation_base/spirit_products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/distilled_spirits/distilled_spirit_type/infusions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/food/ingredient/dishes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/wine/grape_variety/wine_styles",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/geology/rock_type/formations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/medicine/drug/brands",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/visual_art/visual_art_medium/artworks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/food/ingredient/recipes/food/recipe_ingredient/recipe",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/physics/quark/composes/physics/subatomic_particle_composition/composes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/wine/grape_variety/wines/wine/grape_variety_composition/wine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/medicine/drug_ingredient/active_moiety_of_formulation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  },
  {
    "sentence form": "obj is made of subj",
    "property": "/visual_art/visual_art_support/artworks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/composes"
  }
,


  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_team/away_games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_team/home_games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/aviation/airline/accidents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/award/competitor/competitions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/award/competitor/competitions_won",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/event/disaster_survivor/survived_disasters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/event/disaster_victim/killed_in_disaster",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/event/event_producer/events_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/event/event_promoter/events_promoted",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/politician/election_campaigns",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/electoral_college/elections",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/governmental_body/sessions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/constitutional_convention_delegate/constitutional_conventions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/court/legal_cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/judge/cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_person/participated_in_conflicts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/music/artist/concert_tours",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/music/tour_manager/tours_managed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_games/participating_countries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/business/company_advisor/companies_advised",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/people/family/rise_to_prominence",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/royalty/coronation/monarch",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_league/seasons",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_referee/assistant_referee_at",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_referee/main_referee_for",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_team/matches",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/spaceflight/astronaut/missions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sport_country/multi_event_tournaments_participated_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_team/championships",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_league/seasons",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_player/games/american_football/player_game_statistics/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_player/passing/american_football/player_passing_statistics/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_player/receiving/american_football/player_receiving_statistics/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/american_football/football_player/rushing/american_football/player_rushing_statistics/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/baseball/baseball_team/team_stats/baseball/baseball_team_stats/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/baseball/baseball_player/batting_stats/baseball/batting_statistics/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/baseball/baseball_player/lifetime_batting_statistics/baseball/lifetime_batting_statistics/ending_season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/baseball/baseball_player/lifetime_batting_statistics/baseball/lifetime_batting_statistics/last_statistics_season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/baseball/baseball_player/lifetime_batting_statistics/baseball/lifetime_batting_statistics/starting_season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/basketball/basketball_player/player_statistics/basketball/basketball_player_stats/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/basketball/basketball_team/team_stats/basketball/basketball_team_stats/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/chess/chess_player/games_played/chess/chess_game_participation/game",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/film/film_festival_sponsor/festivals_sponsored/film/film_festival_sponsorship/festival",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/film/film_company/films/film/film_film_company_relationship/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/governmental_body/members/government/government_position_held/legislative_sessions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/politician/government_positions_held/government/government_position_held/legislative_sessions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/legislative_committee/members/government/legislative_committee_membership/session",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/government/politician/legislative_committees_served_on/government/legislative_committee_membership/session",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/litigant/party_to_cases/law/legal_case_party_relationship/case",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_combatant/casualties/military/casualties/military_conflict",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_combatant/force_deployments/military/force_strength/military_conflict",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_combatant/military_conflicts/military/military_combatant_group/conflict",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_combatant/military_commanders/military/military_command/military_conflict",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/military/military_commander/military_commands/military/military_command/military_conflict",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/demonstration_events_competed_in/olympics/demonstration_event_athlete_relationship/competition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/country/olympics/olympic_athlete_affiliation/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_participating_country/athletes/olympics/olympic_athlete_affiliation/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_participating_country/demonstration_medals_won/olympics/olympic_demonstration_medal_honor/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/medals_won/olympics/olympic_medal_honor/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_athlete/medals_won/olympics/olympic_medal_honor/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_participating_country/medals_won/olympics/olympic_medal_honor/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_player/disciplinary_action/soccer/football_disciplinary_action/match",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_player/goals_scored/soccer/football_goal/match",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_league/teams/soccer/football_league_participation/from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_team/league/soccer/football_league_participation/from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_league/teams/soccer/football_league_participation/to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_team/league/soccer/football_league_participation/to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_player/matches_played/soccer/football_player_match_participation/match",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/soccer/football_team_manager/matches/soccer/football_team_manager_match_participation/match",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/competition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/tournament_event_competitor/events_competed_in/sports/competitor_competition_relationship/competition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/tournament_team/tournaments_competed_in/sports/competitor_competition_relationship/competition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sport_country/athletic_performances/sports/competitor_competition_relationship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/tournament_event_competitor/events_competed_in/sports/competitor_competition_relationship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/tournament_team/tournaments_competed_in/sports/competitor_competition_relationship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sport_country/athletes/sports/competitor_country_relationship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/tournament_event_competitor/country/sports/competitor_country_relationship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_award_winner/awards/sports/sports_award/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/drafted_athlete/drafted/sports/sports_league_draft_pick/draft",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/professional_sports_team/draft_picks/sports/sports_league_draft_pick/draft",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_league/teams/sports/sports_league_participation/from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_team/league/sports/sports_league_participation/from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_league/teams/sports/sports_league_participation/to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_team/league/sports/sports_league_participation/to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/sports/sports_team/season_record/sports/sports_team_season_record/season",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/tennis/tennis_player/matches_lost/tennis/tennis_match/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/tennis/tennis_player/matches_won/tennis/tennis_match/event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/tennis/tennis_tournament_champion/tennis_titles/tennis/tennis_tournament_championship/tournament",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/judge/cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/law/litigant/party_to_cases/law/legal_case_party_relationship/case",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  },
  {
    "sentence form": "subj was in obj",
    "property": "/olympics/olympic_torchbearer/participation_in_relays/olympics/olympic_torch_relay/olympics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/participatedin"
  }
  ,


  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/away_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/home_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/astronomy/astronomical_survey_project_organization/observatory",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/aviation/airliner_accident/operator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/award/competition/competitors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/award/competition/winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/field_umpires",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/first_batting_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/man_of_the_match",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/match_referee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/third_umpire",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/toss_winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_match/winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_roster/captain",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_series/team_one",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_series/team_two",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/cricket/cricket_tournament_event/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/event/disaster/survivors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/event/disaster/victims",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/event/produced_event/produced_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/event/promoted_event/promoted_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/election_campaign/candidate",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/election_campaign/party",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/election/winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/indirect_election/electors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/legislative_session/legislature",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/law/constitutional_convention/delegates",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/law/legal_case/court",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/law/legal_case/judges",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/military_personnel_involved",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/music/concert_tour/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/music/concert_tour/tour_manager",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_participating_country/olympics_participated_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/organization/organization/advisors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/royalty/monarch/coronation_event",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_league_season/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_league_season/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/assistant_referees",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/referee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/spaceflight/space_mission/astronauts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/participating_countries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_championship_event/champion",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_championship_event/runner_up",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_draft/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_season/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/time/event/people_involved",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/passing/american_football/game_passing_statistics/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/passing/american_football/game_passing_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/receiving/american_football/game_receiving_statistics/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/receiving/american_football/game_receiving_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/rushing/american_football/game_rushing_statistics/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/american_football/football_game/rushing/american_football/game_rushing_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/chess/chess_game/players/chess/chess_game_participation/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/event/public_speaking_event/speech_presentation_discussion/event/speech_or_presentation/speaker_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/film/film_festival/sponsoring_organization/film/film_festival_sponsorship/sponsor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/film/film/other_film_companies/film/film_film_company_relationship/film_company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/legislative_session/members/government/government_position_held/governmental_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/legislative_session/members/government/government_position_held/office_holder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/government/general_election/legislative_results/government/legislative_election_results/party",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/law/legal_case/parties/law/legal_case_party_relationship/parties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/casualties/military/casualties/combatant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/force_strengths/military/force_strength/combatant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/combatants/military/military_combatant_group/combatants",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/commanders/military/military_command/military_combatant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/military/military_conflict/commanders/military/military_command/military_commander",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_demonstration_competition/competitors/olympics/demonstration_event_athlete_relationship/athlete",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/athletes/olympics/olympic_athlete_affiliation/athlete",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/athletes/olympics/olympic_athlete_affiliation/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_demonstration_competition/medalists/olympics/olympic_demonstration_medal_honor/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/demonstration_medals_awarded/olympics/olympic_demonstration_medal_honor/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_demonstration_competition/medalists/olympics/olympic_demonstration_medal_honor/medalist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/demonstration_medals_awarded/olympics/olympic_demonstration_medal_honor/medalist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_event_competition/medalists/olympics/olympic_medal_honor/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/medals_awarded/olympics/olympic_medal_honor/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_event_competition/medalists/olympics/olympic_medal_honor/medalist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/olympics/olympic_games/medals_awarded/olympics/olympic_medal_honor/medalist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/disciplinary_action/soccer/football_disciplinary_action/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/goals/soccer/football_goal/point_awarded_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/goals/soccer/football_goal/scorer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/players/soccer/football_player_match_participation/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/players/soccer/football_player_match_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/substitution/soccer/football_player_substitution/off",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/substitution/soccer/football_player_substitution/on",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/managers/soccer/football_team_manager_match_participation/manager",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/soccer/football_match/managers/soccer/football_team_manager_match_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/athletic_performances/sports/competitor_competition_relationship/competitors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/tournament_event_competition/competitors/sports/competitor_competition_relationship/competitors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/athletic_performances/sports/competitor_competition_relationship/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/tournament_event_competition/competitors/sports/competitor_competition_relationship/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/athletic_performances/sports/competitor_competition_relationship/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/tournament_event_competition/competitors/sports/competitor_competition_relationship/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/competitors/sports/competitor_country_relationship/competitor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/multi_event_tournament/competitors/sports/competitor_country_relationship/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_season/awards/sports/sports_award/award_winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_season/awards/sports/sports_award/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_draft/picks/sports/sports_league_draft_pick/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/sports/sports_league_draft/picks/sports/sports_league_draft_pick/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/tennis/tennis_tournament/match_results/tennis/tennis_match/loser",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  },
  {
    "sentence form": "obj was in subj",
    "property": "/tennis/tennis_tournament/match_results/tennis/tennis_match/winner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparticipant"
  }
,

  {
    "sentence form": "subj discovered obj",
    "property": "/astronomy/astronomer/astronomical_objects_discovered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discovered"
  },
  {
    "sentence form": "subj discovered obj",
    "property": "/astronomy/astronomical_survey_project_organization/celestial_objects_discovered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discovered"
  },
  {
    "sentence form": "subj discovered obj",
    "property": "/chemistry/element_discoverer/discovered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discovered"
  }
  ,


  {
    "sentence form": "obj discovered subj",
    "property": "/astronomy/astronomical_discovery/discoverer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discoveredby"
  },
  {
    "sentence form": "obj discovered subj",
    "property": "/astronomy/astronomical_discovery/discovery_organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discoveredby"
  },
  {
    "sentence form": "obj discovered subj",
    "property": "/astronomy/meteorite/meteorite_fall_discoverer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discoveredby"
  },
  {
    "sentence form": "obj discovered subj",
    "property": "/astronomy/meteorite/meteorite_observer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discoveredby"
  },
  {
    "sentence form": "obj discovered subj",
    "property": "/chemistry/chemical_element/discoverer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/discoveredby"
  }
,

  {
    "sentence form": "subj services obj",
    "property": "/aviation/airport/focus_city_for",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/periodicals/newspaper_circulation_area/newspapers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/cvg/computer_game_region/versions_released_in_this_region",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/location/country/currency_formerly_used",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/location/country/currency_used",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/government/governmental_jurisdiction/agencies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/government/governmental_jurisdiction/government",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/government/governmental_jurisdiction/government_bodies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/government/governmental_jurisdiction/government_positions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/law/court_jurisdiction_area/courts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/meteorology/forecast_zone/weather_service",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/organization/organization_scope/organizations_with_this_scope",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/sports/sports_team_location/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/aviation/airport/airlines/aviation/airline_airport_presence/airline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/engineering/location_with_mains_power/mains_power_standards/engineering/mains_power/compatible_plugs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/rail/railway/rolling_stock/rail/rolling_stock_tenure/locomotive",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/travel/transport_terminus/travel_destinations_served/travel/transportation/transport_operator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/travel/travel_destination/how_to_get_here/travel/transportation/transport_operator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/law/court_jurisdiction_area/courts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  },
  {
    "sentence form": "subj services obj",
    "property": "/location/location/nearby_airports",
    "metaschema": "/base/fbontology/metaschema/predicate_id/serviceareaof"
  }
  ,


  {
    "sentence form": "obj represents subj",
    "property": "/broadcast/radio_station/slogan",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/broadcast/tv_station/slogan",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/education/educational_institution/motto",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/education/fraternity_sorority/symbol",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/film/film/tagline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/organization/organization/slogan",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/royalty/order_of_chivalry/motto",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/education/educational_institution/colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/education/educational_institution/mascot",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/education/fraternity_sorority/colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/olympics/olympic_games/mascot",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/sports/sports_team/colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/sports/sports_team/team_mascot",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/business/brand/colors/business/brand_colors/colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/business/brand/slogans/business/brand_slogan/slogan",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/location/country/national_anthem/government/national_anthem_of_a_country/anthem",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/government/governmental_jurisdiction/official_symbols/location/location_symbol_relationship/symbol",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/symbols/coat_of_arms_bearer/coat_of_arms_used/symbols/armorial_grant/coat_of_arms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/skiing/run_rating/symbol",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/symbols/flag_referent/flag/symbols/flag_use/flag",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/sports/sports_team/fight_song",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  },
  {
    "sentence form": "obj represents subj",
    "property": "/government/governmental_jurisdiction/official_symbols/location/location_symbol_relationship/symbol",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassymbol"
  }
,

  {
    "sentence form": "subj represents obj",
    "property": "/education/school_mascot/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/olympics/olympic_mascot/olympic_games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/sports/mascot/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/symbols/heraldic_coronet/noble_rank",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/business/advertising_slogan/brand/business/brand_slogan/brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/government/national_anthem/national_anthem_of/government/national_anthem_of_a_country/country",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/location/symbol_of_administrative_division/official_symbol_of/location/location_symbol_relationship/administrative_division",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/symbols/coat_of_arms/bearers/symbols/armorial_grant/armiger",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/skiing/run_rating_symbol/run_rating",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/symbols/flag/used_by/symbols/flag_use/flag_user",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  },
  {
    "sentence form": "subj represents obj",
    "property": "/sports/fight_song/sports_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/symbolizes"
  }
  ,


  {
    "sentence form": "obj is the child of subj",
    "property": "/biology/organism/children",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/computer/file_format/extended_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/computer/programming_language/dialects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/engineering/channel_access_method/child_method",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/games/game/derivative_games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/language/language_writing_system/child_writing_systems",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/people/person/children",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/religion/religion/branched_into",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/tv/tv_program/spin_offs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/computer/web_browser/extensions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/cvg/computer_videogame/expansions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/games/game/expansions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  },
  {
    "sentence form": "obj is the child of subj",
    "property": "/biology/hybrid_parent_classification/hybrids/biology/hybrid_parentage/hybrid",
    "metaschema": "/base/fbontology/metaschema/predicate_id/haschild"
  }
,


  {
    "sentence form": "obj is the parent of subj",
    "property": "/biology/organism/parents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/computer/file_format/extended_from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/computer/programming_language/parent_language",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/engineering/channel_access_method/parent_method",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/games/game/derived_from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/language/language_writing_system/parent_writing_systems",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/people/person/parents",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/religion/religion/branched_from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/tv/tv_program/spun_off_from",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/computer/web_browser_extension/works_on_web_browser",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/cvg/computer_game_expansion/expansion_for",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/games/game_expansion/game",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  },
  {
    "sentence form": "obj is the parent of subj",
    "property": "/biology/hybrid/parent_classifications/biology/hybrid_parentage/parent",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasparent"
  }
  ,


  {
    "sentence form": "subj is a member of obj",
    "property": "/religion/religious_organization/is_member_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_team/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_team/division",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/aviation/airline/alliance",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/baseball/baseball_team/division",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/baseball/baseball_team/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_conference/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_team/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_team/division",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/book/author/school_or_movement",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/education/academic/departments_old",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/education/school/school_district",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/ice_hockey/hockey_team/conference",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/ice_hockey/hockey_team/division",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/organization/organization/partnerships",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/people/person/nationality",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/people/person/religion",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/spaceflight/astronaut/space_agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/sports_team/member_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/broadcast/tv_channel/network",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/zoos/zoo/memberships",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_coach/coaching_history/american_football/football_historical_coach_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/former_teams/american_football/football_historical_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/current_team/american_football/football_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/games/american_football/player_game_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/passing/american_football/player_passing_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/receiving/american_football/player_receiving_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/american_football/football_player/rushing/american_football/player_rushing_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/baseball/baseball_player/former_teams/baseball/baseball_historical_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/baseball/baseball_player/current_team/baseball/baseball_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/baseball/baseball_player/batting_stats/baseball/batting_statistics/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_player/former_teams/basketball/basketball_historical_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_player/player_statistics/basketball/basketball_player_stats/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/basketball/basketball_player/team/basketball/basketball_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/broadcast/radio_station/affiliations/broadcast/radio_affiliation_duration/network",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/broadcast/tv_station/affiliations/broadcast/tv_affiliation_duration/network",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/people/person/employment_history/business/employment_tenure/company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/cricket/cricket_umpire/accreditions/cricket/cricket_umpire_panel_membership/panel",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/education/academic/appointments_fellowships_etc/education/academic_post/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/people/person/education/education/education/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/fashion/fashion_designer/labels/fashion/designer_label_association/label",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/government/politician/government_positions_held/government/government_position_held/governmental_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/government/politician/legislative_committees_served_on/government/legislative_committee_membership/committee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/government/politician/party/government/political_party_tenure/party",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/ice_hockey/hockey_player/former_team_s/ice_hockey/hockey_previous_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/ice_hockey/hockey_player/current_team/ice_hockey/hockey_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/law/judge/courts/law/judicial_tenure/court",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/military/military_person/service/military/military_service/military_force",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/military/military_person/service/military/military_service/unit",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/music/group_member/membership/music/group_membership/group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/organization/organization_member/committees_served_on/organization/organization_committee_membership/committee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/organization/organization_member/member_of/organization/organization_membership/organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/royalty/chivalric_order_member/belongs_to_order/royalty/chivalric_order_membership/order",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/royalty/chivalric_order_officer/memberships_presented/royalty/chivalric_order_membership/order",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/goals_scored/soccer/football_goal/point_awarded_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_team/league/soccer/football_league_participation/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/loans/soccer/football_player_loan/borrowing_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/loans/soccer/football_player_loan/lending_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/matches_played/soccer/football_player_match_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/transfers/soccer/football_player_transfer/purchasing_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/transfers/soccer/football_player_transfer/selling_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/soccer/football_player/current_team/soccer/football_roster_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/tournament_event_competitor/events_competed_in/sports/competitor_competition_relationship/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/sports_award_winner/awards/sports/sports_award/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/drafted_athlete/drafted/sports/sports_league_draft_pick/school",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/drafted_athlete/drafted/sports/sports_league_draft_pick/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/sports_team/league/sports/sports_league_participation/league",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/sports/sports_official/sports_association/sports/sports_official_tenure/sportsassociation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  },
  {
    "sentence form": "subj is a member of obj",
    "property": "/law/judge/courts/law/judicial_tenure/court",
    "metaschema": "/base/fbontology/metaschema/predicate_id/memberof"
  }
,

  {
    "sentence form": "obj is a member of subj",
    "property": "/religion/religious_organization/member_organizations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/american_football/football_conference/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/american_football/football_division/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/aviation/airline_alliance/member_airlines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/baseball/baseball_division/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/baseball/baseball_league/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/basketball/basketball_conference/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/basketball/basketball_division/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/book/school_or_movement/associated_authors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/cricket/cricket_administrative_body/members",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/education/department/academics_old",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/education/school_district/schools",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/ice_hockey/hockey_conference/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/ice_hockey/hockey_division/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/organization/organization_partnership/members",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/spaceflight/space_agency/astronauts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/tv/tv_network/channels",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/american_football/football_team/historical_coaching_staff/american_football/football_historical_coach_position/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/american_football/football_team/historical_roster/american_football/football_historical_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/american_football/football_team/current_roster/american_football/football_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/baseball/baseball_team/historical_roster/baseball/baseball_historical_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/baseball/baseball_team/current_roster/baseball/baseball_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/basketball/basketball_team/historical_roster/basketball/basketball_historical_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/basketball/basketball_team/roster/basketball/basketball_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/broadcast/radio_network/affiliates/broadcast/radio_affiliation_duration/station",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/tv/tv_network/affiliates/broadcast/tv_affiliation_duration/station",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/business/employer/employees/business/employment_tenure/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/cricket/cricket_umpire_panel/members/cricket/cricket_umpire_panel_membership/umpire",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/education/academic_institution/visiting_scholars_fellows_etc/education/academic_post/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/education/educational_institution/students_graduates/education/education/student",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/fashion/fashion_label/designers/fashion/designer_label_association/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/government/governmental_body/members/government/government_position_held/office_holder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/government/legislative_committee/members/government/legislative_committee_membership/member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/government/political_party/politicians_in_this_party/government/political_party_tenure/politician",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/ice_hockey/hockey_team/historical_roster/ice_hockey/hockey_previous_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/ice_hockey/hockey_team/current_roster/ice_hockey/hockey_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/law/court/judges/law/judicial_tenure/judge",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/military/armed_force/personnel/military/military_service/military_person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/military/military_unit/servicemembers/military/military_service/military_person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/music/musical_group/member/music/group_membership/member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/organization/organization_committee/members/organization/organization_committee_membership/member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/organization/membership_organization/members/organization/organization_membership/member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/royalty/order_of_chivalry/recipients/royalty/chivalric_order_membership/presented_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/royalty/order_of_chivalry/recipients/royalty/chivalric_order_membership/recipient",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_league/teams/soccer/football_league_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_team/borrowed_players/soccer/football_player_loan/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_team/loaned_players/soccer/football_player_loan/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_team/purchased_players/soccer/football_player_transfer/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_team/sold_players/soccer/football_player_transfer/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/soccer/football_team/current_roster/soccer/football_roster_position/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/sports/tournament_team/tournaments_competed_in/sports/competitor_competition_relationship/competitors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/sports/professional_sports_team/draft_picks/sports/sports_league_draft_pick/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/sports/sports_league/teams/sports/sports_league_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/law/court/judges/law/judicial_tenure/judge",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/government/government_office_category/officeholders/government/government_position_held/office_position_or_title",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  },
  {
    "sentence form": "obj is a member of subj",
    "property": "/sports/sports_team/roster/sports/sports_team_roster/player",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasmember"
  }
  ,

  {
    "sentence form": "obj is the leader of subj",
    "property": "/american_football/football_team/current_head_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/architecture/museum/director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/baseball/baseball_team/current_manager",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/basketball/basketball_team/head_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/ice_hockey/hockey_team/captain",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/ice_hockey/hockey_team/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/royalty/kingdom/rulers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/baseball/baseball_team/historical_managers/baseball/baseball_historical_managerial_position/manager",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/baseball/baseball_team/current_coaches/baseball/current_coaching_tenure/baseball_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/baseball/baseball_team/historical_coaches/baseball/historical_coaching_tenure/baseball_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/basketball/basketball_team/previous_coaches/basketball/basketball_historical_coach_position/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/book/periodical/editorial_staff/book/editorial_tenure/editor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/coaches/cricket/cricket_coach_tenure/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/odi_stats/cricket/cricket_team_stats/odi_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/test_stats/cricket/cricket_team_stats/odi_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/odi_stats/cricket/cricket_team_stats/test_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/cricket/cricket_team/test_stats/cricket/cricket_team_stats/test_coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/dining/restaurant/chefs/dining/restaurant_chef_association/chef",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/government/governmental_jurisdiction/governing_officials/government/government_position_held/governmental_body",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/government/governmental_jurisdiction/governing_officials/government/government_position_held/office_holder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/military/military_combatant/military_commanders/military/military_command/military_commander",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/music/conducted_ensemble/conductors/music/conducting_tenure/conductor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/organization/organization/leadership/organization/leadership/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/organization/organization/board_members/organization/organization_board_membership/member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/religion/religious_leadership_jurisdiction/leader/religion/religious_organization_leadership/leader",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/religion/religious_organization/leaders/religion/religious_organization_leadership/leader",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/royalty/order_of_chivalry/officers/royalty/chivalric_order_position_tenure/officer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/soccer/football_team/manager/soccer/football_team_management_tenure/manager",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  },
  {
    "sentence form": "obj is the leader of subj",
    "property": "/sports/sports_team/coaches/sports/sports_team_coach_tenure/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasleader"
  }
,


  {
    "sentence form": "subj is the leader of obj",
    "property": "/american_football/football_coach/current_team_head_coached",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/architecture/museum_director/museum",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/baseball/baseball_manager/current_team_managed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/basketball/basketball_coach/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/current_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_roster/coach",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/ice_hockey/hockey_coach/current_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/royalty/monarch/kingdom",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/royalty/royal_line/kingdom_s_ruled",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/baseball/baseball_manager/former_teams_managed/baseball/baseball_historical_managerial_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/baseball/baseball_coach/current_team_coaching/baseball/current_coaching_tenure/baseball_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/baseball/baseball_coach/historical_teams_coached/baseball/historical_coaching_tenure/baseball_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/basketball/basketball_coach/previous_teams/basketball/basketball_historical_coach_position/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/book/periodical_editor/periodicals_edited/book/editorial_tenure/periodical",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/teams/cricket/cricket_coach_tenure/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/overall_odi_stats/cricket/cricket_team_stats/odi_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/overall_test_stats/cricket/cricket_team_stats/odi_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/overall_odi_stats/cricket/cricket_team_stats/test_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/cricket/cricket_coach/overall_test_stats/cricket/cricket_team_stats/test_team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/dining/chef/restaurants/dining/restaurant_chef_association/restaurant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/government/governmental_body/members/government/government_position_held/jurisdiction_of_office",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/government/politician/government_positions_held/government/government_position_held/jurisdiction_of_office",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/military/military_commander/military_commands/military/military_command/military_combatant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/music/conductor/groups/music/conducting_tenure/ensemble",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/business/board_member/leader_of/organization/leadership/organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/business/board_member/organization_board_memberships/organization/organization_board_membership/organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/religion/religious_leader/religious_leadership/religion/religious_organization_leadership/jurisdiction",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/religion/religious_leader/religious_leadership/religion/religious_organization_leadership/organization",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/royalty/chivalric_order_officer/offices_held/royalty/chivalric_order_position_tenure/order",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/soccer/football_team_manager/team/soccer/football_team_management_tenure/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/soccer/football_team_manager/matches/soccer/football_team_manager_match_participation/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  },
  {
    "sentence form": "subj is the leader of obj",
    "property": "/sports/sports_team_coach/teams_coached/sports/sports_team_coach_tenure/team",
    "metaschema": "/base/fbontology/metaschema/predicate_id/leaderof"
  }
  ,


  {
    "sentence form": "subj is owned by obj",
    "property": "/automotive/make/parent_company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/automotive/manufacturing_plant/company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/automotive/privately_owned_vehicle/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/book/newspaper/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/broadcast/radio_station/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/broadcast/tv_station/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/business/shopping_center/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/internet/website/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/law/us_patent/assignee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/sports/professional_sports_team/owner_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/architecture/structure/owner/architecture/ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/biology/owned_animal/owners/biology/animal_ownership/owners",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/boats/ship/owners/boats/ship_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/business/asset/owners/business/asset_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/zoos/zoo/owner/business/asset_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/business/brand/owner_s/business/company_brand_relationship/company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/business/issue/holders/business/holding/holder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/interests/collectable_item/in_collections/interests/collection/collector",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/internet/website/owner_new/internet/website_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/military/military_post/used_by_armed_forces/military/military_post_use/armed_force",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/rail/locomotive_owner/locomotives_owned/rail/locomotive_ownership/locomotive",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/visual_art/artwork/owners/visual_art/artwork_owner_relationship/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/skiing/ski_area/owner/skiing/ski_area_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/education/athletics_brand/institution",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  },
  {
    "sentence form": "subj is owned by obj",
    "property": "/travel/hotel_brand/owned_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasowner"
  }
,


  {
    "sentence form": "subj owns obj",
    "property": "/automotive/company/make_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/automotive/company/manufacturing_plants",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/book/newspaper_owner/newspapers_owned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/broadcast/radio_station_owner/radio_stations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/broadcast/tv_station_owner/tv_stations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/business/shopping_center_owner/shopping_centers_owned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/internet/website_owner/websites_owned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/law/patent_assignee/patents_assigned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/sports/sports_team_owner/teams_owned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/architecture/architectural_structure_owner/structures_owned/architecture/ownership/structure",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/biology/animal_owner/animals_owned/biology/animal_ownership/animal",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/boats/ship_owner/ships_owned/boats/ship_ownership/ship",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/amusement_parks/park/owner/business/asset_ownership/owned_asset",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/business/asset_owner/assets_owned/business/asset_ownership/owned_asset",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/business/consumer_company/brands/business/company_brand_relationship/brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/business/business_operation/competitive_space/business/competitive_space_mediator/brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/business/shareholder/holding/business/holding/issue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/interests/collector/collections/interests/collection/items",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/internet/website_owner/websites_owned_new/internet/website_ownership/website",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/military/armed_force/military_posts/military/military_post_use/military_post",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/rail/locomotive/owners/rail/locomotive_ownership/owner",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/visual_art/art_owner/artworks_owned/visual_art/artwork_owner_relationship/artwork",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/skiing/ski_area_owner/ski_areas_owned/skiing/ski_area_ownership/ski_area",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/education/educational_institution/athletics_brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  },
  {
    "sentence form": "subj owns obj",
    "property": "/travel/hotel_brand_owner/hotel_brands_owned",
    "metaschema": "/base/fbontology/metaschema/predicate_id/owns"
  }
  ,


  {
    "sentence form": "subj is friends with obj",
    "property": "/astronomy/constellation/bordering_constellations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/automotive/platform/related",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/education/academic/advisors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/education/academic/advisees",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/medicine/disease/affiliated_diseases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/metropolitan_transit/transit_line/alternate_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/metropolitan_transit/transit_line/primary_line",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/business/competitive_space/related_industries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/celebrities/supercouple/partners",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/astronomy/constellation/bordering_constellations_new/astronomy/constellation_bordering_relationship/constellations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/aviation/aircraft_model/comparable_aircraft/aviation/comparable_aircraft_relationship/aircraft",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/celebrities/celebrity/celebrity_friends/celebrities/friendship/friend",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/celebrities/celebrity/celebrity_rivals/celebrities/rivalry/rival",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/influence/influence_node/peers/influence/peer_relationship/peers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/location/location/adjoin_s/location/adjoining_relationship/adjoins",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/location/location/coterminous_with/location/cotermination/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/people/person/sibling_s/people/sibling_relationship/sibling",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/royalty/chivalric_rank/opposite_gender_equivalent/royalty/chivalric_rank_gender_equivalence/rank",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/royalty/chivalric_title/opposite_gender_equivalent/royalty/chivalric_title_gender_equivalency/equivalent_titles",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/royalty/noble_rank/opposite_gender_equivalent/royalty/noble_rank_gender_equivalence/noble_rank",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/royalty/noble_title/opposite_gender_equivalent/royalty/noble_title_gender_equivalency/equivalent_title",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/automotive/model/related_models/automotive/similar_automobile_models/related_model",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/medicine/manufactured_drug_form/therapeutic_equivalents/medicine/drug_therapeutic_equivalence_relationship/equivalent",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  },
  {
    "sentence form": "subj is friends with obj",
    "property": "/people/person/spouse_s/people/marriage/spouse",
    "metaschema": "/base/fbontology/metaschema/predicate_id/peerof"
  }
,


  {
    "sentence form": "obj is a type of subj",
    "property": "/astronomy/celestial_object_category/subcategories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/astronomy/telescope_type/lower_telescope_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/astronomy/type_of_planetographic_feature/includes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/biology/gene_ontology_group/narrower_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/biology/organism_classification/lower_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/industry/child_industry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/product_ingredient/generalization_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/chemistry/chemical_classification/lower_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/computer_peripheral_class/instances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/computer_processor/variants",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/computer/includes_models",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/operating_system/includes_os_versions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/software_genre/subgenres",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/computer/software_license/versions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/education/field_of_study/subdisciplines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/engineering/engine_category/sub_categories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/engineering/engine/variants",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/engineering/material/subclass",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/engineering/signal_modulation_mode/child_modulation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/fashion/garment/more_specialized_forms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/geography/geographical_feature_category/subcategories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/geology/rock_type/sub_types",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/interests/collection_category/sub_categories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/language/language_family/sub_families",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/media_common/media_genre/child_genres",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/diagnostic_sign/includes_signs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/diagnostic_test/includes_tests",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/disease/includes_diseases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/icd_9_cm_classification/includes_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/symptom/includes_symptoms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/meteorology/cloud/varieties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/music/compositional_form/subforms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/music/genre/subgenre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/people/cause_of_death/includes_causes_of_death",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/people/ethnicity/includes_groups",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/people/profession/specializations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/physics/particle_family/subclasses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/protected_sites/site_listing_category/subcategories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/rail/locomotive_class/subclasses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/religion/religion/includes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/award/award/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/biology/domesticated_animal/breeds",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/cvg/computer_game_engine_family/engines_in_this_family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/disease/stages",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/music/instrument/variation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/superclassof"
  }
  ,


  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/celestial_object_category/subcategory_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/telescope_type/higher_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/astronomy/type_of_planetographic_feature/included_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/gene_ontology_group/broader_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/organism_classification/higher_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/business/industry/parent_industry",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/business/product_ingredient/variety_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/chemistry/chemical_classification/higher_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/computer_peripheral_class/instance_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/computer_processor/processor_family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/computer/parent_model",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/operating_system/parent_os",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/software_genre/parent_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/computer/software_license/version_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/education/field_of_study/subdiscipline_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/engine_category/category_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/engine/variation_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/material/parent_material_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/engineering/signal_modulation_mode/parent_modulation",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/fashion/garment/specialization_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geography/geographical_feature_category/subcategory_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/geology/rock_type/parent_rock_type",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/interests/collection_category/parent_category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/language/language_family/member_of_language_families",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/media_common/media_genre/parent_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/diagnostic_sign/parent_sign",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/diagnostic_test/parent_test",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/disease/parent_disease",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/icd_9_cm_classification/parent_classification",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/symptom/parent_symptom",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/meteorology/cloud/cloud_family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/music/compositional_form/superforms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/music/genre/parent_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/people/cause_of_death/parent_cause_of_death",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/people/ethnicity/included_in_group",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/people/profession/specialization_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/physics/particle_family/parent_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/protected_sites/site_listing_category/supercategory",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/rail/locomotive_class/parent_class",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/religion/religion/is_part_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/award/award_category/category_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/biology/animal_breed/breed_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/cvg/computer_game_engine/engine_family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/medicine/disease_stage/stage_of",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  },
  {
    "sentence form": "subj is a type of obj",
    "property": "/music/instrument/family",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subclassof"
  }
,


  {
    "sentence form": "subj occurred at obj",
    "property": "/spaceflight/space_mission/landing_site",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/aviation/airliner_accident/accident_site",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/chess/chess_game/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/conferences/conference/venue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/cricket/cricket_match/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/cricket/cricket_tournament_event/host",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/event/disaster/areas_affected",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/film/film_festival_event/venues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/film/film_festival/location",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/government/election/district",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/meteorology/tropical_cyclone/affected_areas",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/military/military_conflict/locations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/music/concert/venue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/olympics/olympic_demonstration_competition/venue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/olympics/olympic_event_competition/venue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/olympics/olympic_games/host_city",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/olympics/olympic_games/venues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/opera/opera_production/performed_at",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/soccer/football_match/held_at",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/spaceflight/space_mission/destination",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/spaceflight/space_mission/launch_site",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/sports/multi_event_tournament/venues",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/theater/theater_production/performed_at",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/time/event/locations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  },
  {
    "sentence form": "subj occurred at obj",
    "property": "/exhibitions/exhibition/venues/exhibitions/exhibition_run/venue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/tookplaceat"
  }
  ,


  {
    "sentence form": "obj occurred at subj",
    "property": "/conferences/conference_venue/conferences",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/government/political_district/elections",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/meteorology/cyclone_affected_area/cyclones",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/music/performance_venue/concerts",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/olympics/olympic_venue/olympic_events_demonstrated_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/olympics/olympic_venue/olympic_events_contested_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/olympics/olympic_host_city/olympics_hosted",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/olympics/olympic_venue/olympic_games_used_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/opera/opera_house/productions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/soccer/football_pitch/matches",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/spaceflight/mission_destination/missions_sent_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/spaceflight/rocket_launch_site/missions_launched_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/theater/theater/theatrical_productions_staged_here",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/location/location/events",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  },
  {
    "sentence form": "obj occurred at subj",
    "property": "/exhibitions/exhibition_venue/exhibitions_at_this_venue/exhibitions/exhibition_run/exhibition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hadeventtakeplace"
  }
,


  {
    "sentence form": "obj is in the genre subj",
    "property": "/architecture/architectural_style/examples",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/media_common/literary_genre/books_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/media_common/literary_genre/stories_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/book/magazine_genre/magazines_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/book/school_or_movement/associated_works",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/broadcast/genre/content",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/broadcast/radio_format/stations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/comic_books/comic_book_genre/comic_book_series_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/comic_books/comic_book_genre/stories_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/comic_strips/comic_strip_genre/comic_strips_of_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/computer/software_genre/software_in_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/cvg/cvg_genre/games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/film/film_genre/films_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/dining/cuisine/dishes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/games/game_genre/boardgames",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/internet/website_category/sites",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/media_common/netflix_genre/titles",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/music/genre/albums",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/opera/opera_genre/operas_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/theater/theater_genre/plays_in_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/tv/tv_genre/programs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/visual_art/art_period_movement/associated_artworks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/visual_art/visual_art_genre/artworks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  },
  {
    "sentence form": "obj is in the genre subj",
    "property": "/music/music_video_genre/music_videos_of_this_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/genreof"
  }
  ,


  {
    "sentence form": "subj is in the genre obj",
    "property": "/architecture/structure/architectural_style",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/book/book/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/book/short_story/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/book/magazine/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/book/written_work/school_or_movement",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/broadcast/content/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/broadcast/radio_station/format",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/comic_books/comic_book_series/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/comic_books/comic_book_story/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/comic_strips/comic_strip/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/computer/software/software_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/cvg/computer_videogame/cvg_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/film/film/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/food/dish/cuisine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/games/game/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/internet/website/category",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/media_common/netflix_title/netflix_genres",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/music/album/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/opera/opera/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/theater/play/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/tv/tv_program/genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/visual_art/artwork/period_or_movement",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/visual_art/artwork/art_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  },
  {
    "sentence form": "subj is in the genre obj",
    "property": "/music/music_video/music_video_genre",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hasgenre"
  }
,


  {
    "sentence form": "subj was succeeded by obj",
    "property": "/automotive/generation/successor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/automotive/model_year/next_model_year",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/automotive/model/successor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/automotive/platform/successor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/cvg/computer_game_engine/successor_engine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/government/government_agency/successor_agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/royalty/royal_line/succeeded_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/royalty/system_of_nobility/supercedes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/government/primary_election/follow_on_election",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/sports/defunct_sports_team/later_known_as",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  },
  {
    "sentence form": "subj was succeeded by obj",
    "property": "/aviation/aircraft_model/variants",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeededby"
  }
  ,


  {
    "sentence form": "obj was succeeded by subj",
    "property": "/automotive/generation/predecessor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/automotive/model_year/previous_model_year",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/automotive/model/predecessor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/automotive/platform/predecessor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/cvg/computer_game_engine/predecessor_engine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/government/government_agency/predecessor_agency",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/royalty/royal_line/preceded_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/royalty/system_of_nobility/superceded_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/government/election/primaries",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/sports/sports_team/previously_known_as",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  },
  {
    "sentence form": "obj was succeeded by subj",
    "property": "/aviation/aircraft_model/parent_aircraft_model",
    "metaschema": "/base/fbontology/metaschema/predicate_id/succeeds"
  }
,


  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_crew_gig/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/architecture/engineer/projects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/architecture/engineering_firm/projects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/architecture/architecture_firm/projects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/automotive/designer/automobiles_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/audio_book_reader/audio_books_read",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/author/book_editions_edited",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/author/contributing_author_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/illustrator/book_edition_covers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/illustrator/book_editions_illustrated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/illustrator/magazine_covers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/illustrator/magazine_issues_illustrated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/author/series_written_or_contributed_to",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/book/translator/works_translated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_colorist/comic_covers_colored",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_inker/comic_covers_inked",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_letterer/comic_covers_lettered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_penciler/comic_covers_penciled",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_editor/issues_edited",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_writer/additional_plotting_contributions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/cvg/cvg_developer/game_versions_developed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/cinematographer/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_costumer_designer/costume_design_for_film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/director/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/editor/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/producer/films_executive_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_art_director/films_art_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_casting_director/films_casting_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_production_designer/films_production_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_set_designer/film_sets_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/music_contributor/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/producer/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/production_company/films",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_story_contributor/film_story_credits",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/writer/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/engineer/releases_engineered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/producer/releases_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/artist/track",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/engineer/tracks_engineered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/producer/tracks_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/conductor/operas_conducted",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/opera/opera_producer/operas_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/opera/opera_company/operas_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/opera/opera_director/operas_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_choreographer/plays_choreographed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_director/plays_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/musical_director/musical_director_for",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_producer/plays_produced",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_director/tv_segments_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_writer/tv_segments_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_director/episodes_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_writer/episodes_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_colorist/comic_stories_colored",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_inker/comic_books_inked",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_letterer/comic_stories_lettered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_penciler/comic_books_penciled",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/comic_books/comic_book_writer/comic_books_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/cvg/game_voice_actor/computer_game_voice_performances/cvg/game_performance/game",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/event/public_speaker/speeches_or_presentations/event/speech_or_presentation/presented_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/actor/dubbing_performances/film/dubbing_performance/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_crewmember/films_crewed/film/film_crew_gig/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/actor/film/film/performance/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/person_or_entity_appearing_in_film/films/film/personal_film_appearance/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/media_common/completer_of_unfinished_work/completed_unfinished_works/media_common/completion_of_unfinished_work/unfinished_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/artist/contribution/music/recording_contribution/album",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/artist/track_contributions/music/track_contribution/track",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/opera/opera_designer/operas_designed/opera/opera_designer_gig/opera",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/opera/opera_production_staff/opera_productions/opera/opera_production_staff_gig/opera",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/opera_singer/opera_roles/opera/opera_role/opera",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/projects/project_participant/projects/projects/project_participation/project",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_designer/plays_designed/theater/theater_designer_gig/play",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_production_staff/theater_productions/theater/theater_production_staff_gig/play",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/theater/theater_actor/theater_roles/theater/theater_role/play",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/seasons",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_actor/starring_roles/tv/regular_tv_appearance/series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_crewmember/tv_episodes_crewed/tv/tv_crew_gig/episode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_program_guest/appeared_on/tv/tv_guest_personal_appearance/episode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_actor/guest_roles/tv/tv_guest_role/episodes_appeared_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_producer/tv_episodes_produced/tv/tv_producer_episode_credit/episode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_producer/programs_produced/tv/tv_producer_term/program",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_writer/tv_programs/tv/tv_program_writer_relationship/tv_program",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_personality/tv_regular_appearances/tv/tv_regular_personal_appearance/program",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_personality/tv_regular_appearances/tv/tv_regular_personal_appearance/seasons",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_program_guest/segment_appearances/tv/tv_segment_guest_appearance/segment",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_actor/tv_segment_performances/tv/tv_segment_performance/segment",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_personality/tv_segment_appearances/tv/tv_segment_personal_appearance/segment",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/broadcast/artist/content",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/exhibitions/exhibition/curators",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/music_video_crewmember/music_video_productions_crewed/music/music_video_gig/music_video",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/music_video_performer/music_video_performances/music/music_video_performance/music_video",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/music_video_choreographer/music_videos_choreographed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/music/music_video_director/music_videos_directed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/film/film_song_performer/film_songs/film/film_song_relationship/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_song_performer/episode_segments/tv/tv_segment_song_relationship/segment",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  },
  {
    "sentence form": "subj contributed to obj",
    "property": "/tv/tv_song_performer/episodes/tv/tv_episode_song_relationship/episode",
    "metaschema": "/base/fbontology/metaschema/predicate_id/contributedto"
  }
  ,


  {
    "sentence form": "obj contributed to subj",
    "property": "/architecture/structure/engineer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/architecture/structure/engineering_firm",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/architecture/structure/architecture_firm",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/automotive/generation/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/book_edition/reader",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/book_edition/editor_of_this_edition",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/book_edition/contributing_authors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/book_edition/cover_artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/book_edition/interior_illustrations_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/magazine_issue/cover_artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/magazine_issue/interior_illustrations_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/literary_series/author_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/book/translation/translator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_issue/cover_colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_issue/cover_inks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_issue/cover_letters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_issue/cover_pencils",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_issue/editor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/additional_plotting",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/cvg/game_version/developer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film_featured_song/performed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/cinematography",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/costume_design_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/directed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/edited_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/executive_produced_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/film_art_direction_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/film_casting_director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/film_production_design_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/film_set_decoration_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/music",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/produced_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/production_companies",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/story_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/written_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/release/engineers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/release/producers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/recording/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/recording/engineer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/recording/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/conductor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/producing_company",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/stage_director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/choreographer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/musical_director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/writer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/director",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/writer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/colors",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/inks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/letters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/pencils",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/comic_books/comic_book_story/script",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/cvg/computer_videogame/characters/cvg/game_performance/voice_actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/event/presented_work/performances/event/speech_or_presentation/speaker_s",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/dubbing_performances/film/dubbing_performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/other_crew/film/film_crew_gig/crewmember",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/starring/film/performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/personal_appearances/film/personal_film_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/media_common/unfinished_work/completions/media_common/completion_of_unfinished_work/finisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/concert/performances/music/concert_performance/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/concert/performances/music/concert_performance/band_members",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/concert/set_list/music/concert_set_list/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/concert/set_list/music/concert_set_list/guest_artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/album/contributor/music/recording_contribution/contributor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/recording/contributions/music/track_contribution/contributor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/designers/opera/opera_designer_gig/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/production_staff/opera/opera_production_staff_gig/staff_member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/opera/opera_production/cast/opera/opera_role/performer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/projects/project/participants/projects/project_participation/participant",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/designers/theater/theater_designer_gig/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/production_staff/theater/theater_production_staff_gig/staff_member",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/theater/theater_production/cast/theater/theater_role/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_program/regular_cast/tv/regular_tv_appearance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_season/regular_cast/tv/regular_tv_appearance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/other_crew/tv/tv_crew_gig/crewmember",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/guest_personal_appearances/tv/tv_guest_personal_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/guest_stars/tv/tv_guest_role/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/producers/tv/tv_producer_episode_credit/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_program/tv_producer/tv/tv_producer_term/producer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_program/recurring_writers/tv/tv_program_writer_relationship/writer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_program/regular_personal_appearances/tv/tv_regular_personal_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_season/regular_personal_appearances/tv/tv_regular_personal_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/guest_personal_appearances/tv/tv_segment_guest_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/performances/tv/tv_segment_performance/actor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/personal_appearances/tv/tv_segment_personal_appearance/person",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/broadcast/content/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/exhibitions/exhibition_curator/exhibitions_curated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/music_video/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/music_video/choreographer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/music_video/crew/music/music_video_gig/crewmember",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/music_video/directed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/music/music_video/performances/music/music_video_performance/music_video_performer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/film/film/songs/film/film_song_relationship/performers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_episode_segment/songs/tv/tv_segment_song_relationship/performers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  },
  {
    "sentence form": "obj contributed to subj",
    "property": "/tv/tv_series_episode/songs/tv/tv_episode_song_relationship/performers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascontributor"
  }
,


  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/book/newspaper/headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/aviation/airline/hubs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/library/public_library_system/central_library",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ar_department/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ar_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/australian_state/capital_city",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/australian_territory/capital_city",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/br_state/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ca_territory/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_autonomous_county/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_autonomous_prefecture/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_autonomous_region/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_prefecture_level_city/city_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_prefecture/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/cn_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/country/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/de_regierungsbezirk/district_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/de_rural_district/district_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/de_state/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/es_autonomous_city/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/es_autonomous_community/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/es_comarca/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/es_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/fr_department/chef_lieu",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/fr_region/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/id_province/Capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/id_regency/regency_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_district/district_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_division/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_state/administrative_capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_state/judicial_capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_state/legislative_capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/in_union_territory/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/it_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/it_region/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/jp_prefecture/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/jp_subprefecture/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/kp_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/mx_municipality/municipal_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/mx_state/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/my_state/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/nl_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_autonomous_oblast/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_autonomous_okrug/administrative_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_krai/administrative_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_oblast/administrative_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_raion/administrative_center",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/ru_republic/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/tr_district/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/tr_province/central_district",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/tw_county/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/tw_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_council_area/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_district/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_metropolitan_borough/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_non_metropolitan_county/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_non_metropolitan_district/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_principal_area/administrative_headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/uk_region/headquarters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/us_county/county_seat",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/us_state/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/vn_province/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/sports/sports_team/arena_stadium",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  },
  {
    "sentence form": "obj is the headquarters of subj",
    "property": "/location/administrative_division/capital/location/administrative_division_capital_relationship/capital",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascenter"
  }
  ,

  {
    "sentence form": "subj is the headquarters of obj",
    "property": "/aviation/airport/hub_for",
    "metaschema": "/base/fbontology/metaschema/predicate_id/centerfor"
  },
  {
    "sentence form": "subj is the headquarters of obj",
    "property": "/sports/sports_facility/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/centerfor"
  }
,



  {
    "sentence form": "obj is a character in subj",
    "property": "/book/short_story/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/book/book/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/book/poem/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/comic_books/comic_book_fictional_universe/characters_primarily_appearing_in_this_universe",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/comic_books/comic_book_issue/characters_on_cover",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/comic_books/comic_book_series/featured_characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/comic_books/comic_book_story/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/comic_strips/comic_strip/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/fictional_universe/fictional_universe/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/theater/play/characters",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/cvg/computer_videogame/characters/cvg/game_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/film/film/dubbing_performances/film/dubbing_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/film/film/starring/film/performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/opera/opera/characters/opera/opera_character_voice/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/tv/tv_program/regular_cast/tv/regular_tv_appearance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/tv/tv_series_season/regular_cast/tv/regular_tv_appearance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/tv/tv_series_episode/guest_stars/tv/tv_guest_role/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/tv/tv_episode_segment/performances/tv/tv_segment_performance/character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  },
  {
    "sentence form": "obj is a character in subj",
    "property": "/music/music_video/performances/music/music_video_performance/music_video_character",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hascharacter"
  }
  ,



  {
    "sentence form": "subj is in obj",
    "property": "/book/book_character/appears_in_stories",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/book/book_character/appears_in_book",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/book/poem_character/appears_in_poems",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_books/comic_book_character/first_appearance",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_books/comic_book_character/primary_universe",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_books/comic_book_character/cover_appearances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_books/comic_book_character/regular_featured_appearances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_books/comic_book_character/story_specific_appearances",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/comic_strips/comic_strip_character/comic_strips_appeared_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/fictional_universe/fictional_character/appears_in_these_fictional_universes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/theater/theater_character/plays_appears_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/first_tv_appearance",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/last_tv_appearance",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/cvg/game_character/games/cvg/game_performance/game",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/film/film_character/portrayed_in_films_dubbed/film/dubbing_performance/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/film/film_character/portrayed_in_films/film/performance/film",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/opera/opera_character/operas_appears_in/opera/opera_character_voice/opera",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/appeared_in_tv_program/tv/regular_tv_appearance/seasons",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/appeared_in_tv_program/tv/regular_tv_appearance/series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/appeared_in_tv_episodes/tv/tv_guest_role/episodes_appeared_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/tv/tv_character/appeared_in_tv_episode_segments/tv/tv_segment_performance/segment",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  },
  {
    "sentence form": "subj is in obj",
    "property": "/music/music_video_character/portrayed_in_music_videos/music/music_video_performance/music_video",
    "metaschema": "/base/fbontology/metaschema/predicate_id/appearsin"
  }
,



  {
    "sentence form": "obj is a type of subj",
    "property": "/business/brand/includes_brands",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/product_line/includes_product_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/automotive/engine_type/examples",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/automotive/engine_type/used_in",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/automotive/body_style/examples",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/aviation/aircraft_line/models_in_line",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/brand/products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/product_line/products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/chemistry/chemical_element/isotopes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/language/human_language/dialects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/language/language_family/languages",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/olympics/olympic_sport/events",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/biology/informal_biological_grouping/included_classifications",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/food/ingredient/more_specific_ingredient",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/education/athletics_brand/teams",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/drug_ingredient/more_specific_ingredient",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/business/brand/product_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/drug_formulation/manufactured_forms",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/drug_formulation/reference_form",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/travel/hotel_brand/hotels_in_this_brand",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/biology/organism_classification_rank/lower_rank",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  },
  {
    "sentence form": "obj is a type of subj",
    "property": "/medicine/drug_brand/canonical_drug",
    "metaschema": "/base/fbontology/metaschema/predicate_id/broaderthan"
  }
  ,



  {
    "sentence form": "subj created obj",
    "property": "/amusement_parks/ride_designer/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/amusement_parks/ride_manufacturer/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/architecture/architect/structures_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/architecture/landscape_architect/landscape_project",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/aviation/aircraft_designer/aircraft_models_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/award/ranked_list_compiler/ranked_lists",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/boats/ship_designer/ship_classes_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/boats/ship_designer/boats_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/author/works_edited",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/author/works_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/series_editor/book_edition_series_edited",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/illustrator/books_illustrated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/interviewee/interviews_given",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/book/interviewer/interviews_conducted",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/business/issuer/issue",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/comic_books/comic_book_creator/characters_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/comic_books/comic_book_creator/series_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/computer/computer_designer/computers_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/computer/operating_system_developer/operating_systems_developed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/computer/programming_language_developer/programming_languages_developed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/computer/programming_language_designer/languages_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/computer/software_developer/software",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/cvg/computer_game_engine_developer/computer_game_engines_developed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/cvg/cvg_designer/games_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/cvg/cvg_developer/games_developed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/engineering/engine_designer/engines_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/food/recipe_author/recipes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/games/game_designer/games_designed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/internet/blogger/blog",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/language/language_creator/languages_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/law/constitutional_amendment_proposer/constitutional_amendments_proposed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/law/inventor/inventions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/people/person/quotations",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/medicine/vaccine_developer/vaccine",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/music/artist/album",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/music/composer/compositions",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/music/lyricist/lyrics_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/opera/librettist/libretti",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/organization/organization_founder/organizations_founded",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/royalty/chivalric_order_founder/orders_founded",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/spaceflight/rocket_engine_designer/rocket_engines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/sports/golf_course_designer/golf_courses",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/theater/theatrical_composer/plays_composed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/theater/theatrical_lyricist/play_lyrics_written",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/theater/theatrical_orchestrator/plays_orchestrated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/tv/tv_program_creator/programs_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/visual_art/visual_artist/art_series",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/visual_art/visual_artist/artworks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/fictional_universe/fictional_character_creator/fictional_characters_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/comic_strips/comic_strip_creator/comic_strips_written/comic_strips/comic_strip_creator_duration/comic_strip",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/media_common/completer_of_unfinished_work/completed_unfinished_works/media_common/completion_of_unfinished_work/finished_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/fictional_universe/fictional_universe_creator/fictional_universes_created",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  },
  {
    "sentence form": "subj created obj",
    "property": "/government/polling_authority/polls",
    "metaschema": "/base/fbontology/metaschema/predicate_id/created"
  }
,


  {
    "sentence form": "subj was created by obj",
    "property": "/amusement_parks/ride/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/amusement_parks/ride/manufacturer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/architecture/structure/architect",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/architecture/landscape_project/landscape_architect",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/aviation/aircraft_model/designed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/award/ranked_list/ranked_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/boats/ship_class/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/boats/ship/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/written_work/editor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/written_work/author",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/book_edition_series/series_editor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/book/interior_illustrations_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/interview/interviewee",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/book/interview/interviewer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/business/issue/issuer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/comic_books/comic_book_character/created_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/comic_books/comic_book_series/created_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/computer/key_designers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/file_format/format_creator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/operating_system/developer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/programming_language/developers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/programming_language/language_designers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/computer/software/developer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/cvg/computer_game_engine/developer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/cvg/computer_videogame/designers",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/cvg/computer_videogame/developer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/engineering/engine/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/food/recipe/author",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/games/game/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/internet/blog/blogger",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/language/conlang/created_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/law/constitutional_amendment/proposed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/law/invention/inventor",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/media_common/quotation/author",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/medicine/vaccine/developed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/music/album/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/music/composition/composer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/music/composition/lyricist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/opera/opera/composer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/opera/opera/librettist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/organization/organization/founders",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/people/family/founder",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/royalty/order_of_chivalry/founders",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/spaceflight/rocket_engine/designed_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/sports/golf_course/designer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/theater/play/composer",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/theater/play/lyricist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/theater/play/orchestrator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/theater/play/playwright",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/tv/tv_program/program_creator",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/visual_art/art_series/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/visual_art/artwork/artist",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/fictional_universe/fictional_character/character_created_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/comic_strips/comic_strip/creator_of_strip/comic_strips/comic_strip_creator_duration/creator_of_strip",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/media_common/finished_work/completion_of/media_common/completion_of_unfinished_work/finisher",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/fictional_universe/fictional_universe/created_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  },
  {
    "sentence form": "subj was created by obj",
    "property": "/government/election_poll/taken_by",
    "metaschema": "/base/fbontology/metaschema/predicate_id/createdby"
  }
  ,




  {
    "sentence form": "obj is about subj",
    "property": "/amusement_parks/ride_theme/rides",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/award/award_discipline/awards_in_this_discipline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/award/hall_of_fame_discipline/halls_of_fame",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/education/field_of_study/journals_in_this_discipline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/book/periodical_subject/periodicals",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/book/reviewed_work/reviews_of_this_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/book/book_subject/works",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/business/product_theme/product_lines",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/business/product_theme/products",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/conferences/conference_subject/series_of_conferences_about_this",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/conferences/conference_subject/specific_conferences_about_this",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/cvg/computer_game_subject/games",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/film/film_festival_focus/festivals_with_this_focus",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/film/film_subject/films",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/interests/collection_category/name_of_collection_activity",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/law/legal_subject/legal_cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/media_common/quotation_subject/quotations_about_this_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/medicine/disease/trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/medicine/disease/medical_specialties",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/medicine/medical_treatment/trials",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/book/book_subject/musical_compositions_about_this_topic",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/projects/project_focus/projects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/radio/radio_subject/segments_with_this_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/radio/radio_subject/episodes_with_this_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/radio/radio_subject/programs_with_this_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/travel/travel_destination/guidebooks",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/tv/tv_subject/tv_episode_segments",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/tv/tv_subject/tv_episodes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/tv/tv_subject/tv_programs",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/visual_art/art_subject/art_series_on_the_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/visual_art/art_subject/artwork_on_the_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/event/speech_topic/speeches_or_presentations_on_this_topic/event/speech_or_presentation/presented_work",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/user/joehughes/default_domain/transit_agency/activist_groups",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/exhibitions/exhibition_subject/exhibitions_created_about_this_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/law/legal_subject/legal_cases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  },
  {
    "sentence form": "obj is about subj",
    "property": "/music/music_video_subject/subject_in_these_music_videos",
    "metaschema": "/base/fbontology/metaschema/predicate_id/subjectof"
  }
,


  {
    "sentence form": "subj is about obj",
    "property": "/amusement_parks/ride/theme",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/award/award_category/disciplines_or_subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/award/hall_of_fame/discipline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/book/journal/discipline",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/book/periodical/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/book/review/work_reviewed",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/book/written_work/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/business/product_line/themes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/business/consumer_product/themes",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/conferences/conference_series/subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/conferences/conference/focus",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/cvg/computer_videogame/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/film/film_festival/focus",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/film/film/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/games/game/game_subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/interests/collection_activity/type_of_thing_collected",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/internet/blog/focus",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/law/legal_case/subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/media_common/quotation/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/medicine/medical_trial/diseases",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/medicine/medical_specialty/diseases_treated",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/medicine/medical_trial/treatment_being_tested",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/music/composition/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/projects/project/project_focus",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/radio/radio_episode_segment/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/radio/radio_program_episode/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/radio/radio_program/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/travel/guidebook/travel_destinations_covered",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/tv/the_colbert_report_episode/intro_topics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/tv/the_colbert_report_episode/the_word_topics",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/tv/tv_episode_segment/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/tv/tv_series_episode/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/tv/tv_program/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/visual_art/art_series/subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/visual_art/artwork/art_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/event/presented_work/performances/event/speech_or_presentation/speech_topic",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/exhibitions/exhibition/subjects",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/law/legal_case/subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  },
  {
    "sentence form": "subj is about obj",
    "property": "/music/music_video/music_video_subject",
    "metaschema": "/base/fbontology/metaschema/predicate_id/hassubject"
  }

]

