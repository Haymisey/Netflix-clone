import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

export default function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrendng}
        isLargeRow={true}
      />
      <Row
        title="ACTION"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
      <Row
        title="TV SHOW"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true}
      />
      <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="ROMANCE"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
    </>
  );
}
