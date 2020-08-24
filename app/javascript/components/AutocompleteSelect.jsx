import React from "react";
import AsyncSelect from "react-select/async";


class AutoCompleteSelect extends React.Component {
  state = {
    focus: false,
    multiValue: [],
    recipes: null
  };

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  handleMultiChange = (option) => {
    this.setState({ multiValue: option });
  }


  loadOptions = (inputValue) => {
    const url = `/ingredients?format=json&search=${inputValue}`;
    return fetch(url, { method: "GET" }).then(data => data.json())
  };

  findRecipe = () => { 
    const url = `/recipes/find_recipes`;
    const body = JSON.stringify({
      ingredients: this.state.multiValue.map(a => a.selectedValue)
    });
    return fetch(url, { method: "GET", body }).then(data => this.setState({ recipes: data.json() }))
  }


  render() {
    return (
      <React.Fragment>
        <AsyncSelect
          name="Ingrédients"
          placeholder="Tapez vos ingrédients"
          value={ this.state.multiValue }
          loadOptions={this.loadOptions}
          onFocus={this.onFocus}
          isMulti={true}
          onBlur={this.onBlur}
          onChange={this.handleMultiChange}
          blurInputOnSelect={true}
          getOptionValue={(option) => option["selectedValue"]}
        />
        <button onClick={this.findRecipe}>
          Trouvez votre recette
        </button>
      </React.Fragment>
    );
  }
}

export default AutoCompleteSelect;
