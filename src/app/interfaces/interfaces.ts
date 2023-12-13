export interface RespuestaMDB {
    page:          number;
    results:       Pelicula[];
    total_pages:   number;
    total_results: number;
}

export interface Pelicula {
    adult?:             boolean;
    backdrop_path:     string;
    genre_ids?:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    Ar = "ar",
    En = "en",
    Ja = "ja",
    Mn = "mn",
}

export interface PeliculaDetalle {
    adult?:                 boolean;
    backdrop_path:          string;
    belongs_to_collection?: null;
    budget?:                number;
    genres?:                Genre[];
    homepage?:              string;
    id:                     number;
    imdb_id?:               string;
    original_language:      string;
    original_title:         string;
    overview:               string;
    popularity:             number;
    poster_path:            string;
    production_companies?:  ProductionCompany[];
    production_countries?:  ProductionCountry[];
    release_date:           string;
    revenue?:               number;
    runtime?:               number;
    spoken_languages?:      SpokenLanguage[];
    status?:                string;
    tagline?:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
    genre_ids?:             number[];
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export interface RespuestaCredits {
    id:   number;
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: KnownForDepartment;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}

export enum KnownForDepartment {
    Acting = "Acting",
    Camera = "Camera",
    Directing = "Directing",
    Editing = "Editing",
    Production = "Production",
    Sound = "Sound",
}
