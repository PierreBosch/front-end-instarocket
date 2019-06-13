import React, { Component } from "react";
import "./New.css";
import api from "../services/api";

export default class Feed extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await api.post("posts", data);

    this.props.history.push("/");
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input onChange={this.handleImageChange} type="file" />

        <input
          values={this.state.author}
          onChange={this.handleChange}
          type="text"
          name="author"
          placeholder="Autor do post"
        />

        <input
          values={this.state.place}
          onChange={this.handleChange}
          type="text"
          name="place"
          placeholder="Local do post"
        />

        <input
          values={this.state.description}
          onChange={this.handleChange}
          type="text"
          name="description"
          placeholder="Descrição do post"
        />

        <input
          values={this.state.hashtags}
          onChange={this.handleChange}
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
