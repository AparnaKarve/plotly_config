//import logo from './logo.svg';
import './App.css';


import React from 'react';
import Plot from 'react-plotly.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    const records = [
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 122,
    "template_name": "template_Apprehensive_Parking_298724",
    "elapsed": 1657.171,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 54,
    "template_name": "template_Opulent_Delivery_287663",
    "elapsed": 1679.696,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 43,
    "template_name": "template_Meager_Meal_85",
    "elapsed": 1997.897,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 74,
    "template_name": "template_Vicious_Pleasure_186712",
    "elapsed": 2025.557,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 14,
    "template_name": "template_Basic_Nasty_311494",
    "elapsed": 2934.789,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 117,
    "template_name": "template_Cruel_Police_186739",
    "elapsed": 4047.927,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 79,
    "template_name": "template_Lustrous_Member_461",
    "elapsed": 4280.87,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 61,
    "template_name": "template_Normal_Neck_314027",
    "elapsed": 7593.11,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 102,
    "template_name": "template_Impressive_List_162306",
    "elapsed": 9895.937,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 38,
    "template_name": "template_Parched_Anxiety_12",
    "elapsed": 10462.326,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 58,
    "template_name": "template_Burly_Opinion_313989",
    "elapsed": 10938.987,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 124,
    "template_name": "template_Unlucky_Guest_351462",
    "elapsed": 11619.232,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 128,
    "template_name": "template_Mundane_Comparison_320756",
    "elapsed": 13680.349,
    "template_count": 1
  },
  {
    "org_id": 5,
    "org_name": "Black Box testing",
    "template_id": 126,
    "template_name": "template_Beautiful_Advice_320724",
    "elapsed": 13751.345,
    "template_count": 1
  },
  {
    "org_id": 13,
    "org_name": "Core Team",
    "template_id": 142,
    "template_name": "template_Shiny_Nation_353169",
    "elapsed": 4022.705,
    "template_count": 1
  },
  {
    "org_id": 13,
    "org_name": "Core Team",
    "template_id": 127,
    "template_name": "template_Variable_Gather_203489",
    "elapsed": 4598.802,
    "template_count": 1
  },
  {
    "org_id": 13,
    "org_name": "Core Team",
    "template_id": 28,
    "template_name": "template_Woozy_Ambition_96390",
    "elapsed": 5251.141,
    "template_count": 1
  },
  {
    "org_id": 13,
    "org_name": "Core Team",
    "template_id": 119,
    "template_name": "template_Sturdy_Matter_111797",
    "elapsed": 7967.026,
    "template_count": 1
  },
  {
    "org_id": 13,
    "org_name": "Core Team",
    "template_id": 149,
    "template_name": "template_Actual_Muscle_39758",
    "elapsed": 13797.183,
    "template_count": 1
  },
  {
    "org_id": 12,
    "org_name": "GCP instances",
    "template_id": 114,
    "template_name": "template_Offensive_Contact_91",
    "elapsed": 3795.523,
    "template_count": 1
  },
  {
    "org_id": 12,
    "org_name": "GCP instances",
    "template_id": 89,
    "template_name": "template_Handy_Television_114",
    "elapsed": 11674.47,
    "template_count": 1
  },
  {
    "org_id": 12,
    "org_name": "GCP instances",
    "template_id": 37,
    "template_name": "template_Polished_Resident_32",
    "elapsed": 20637.514,
    "template_count": 1
  },
  {
    "org_id": 12,
    "org_name": "GCP instances",
    "template_id": 95,
    "template_name": "template_Closed_Can_206268",
    "elapsed": 33993.146,
    "template_count": 1
  },
  {
    "org_id": 9,
    "org_name": "Tryouts",
    "template_id": 141,
    "template_name": "template_Flawless_Shake_277630",
    "elapsed": 598.761,
    "template_count": 1
  },
  {
    "org_id": 9,
    "org_name": "Tryouts",
    "template_id": 123,
    "template_name": "template_Colossal_Number_105114",
    "elapsed": 1409.784,
    "template_count": 1
  },
  {
    "org_id": 7,
    "org_name": "Scaled Deployment",
    "template_id": 110,
    "template_name": "template_Electric_Administration_186732",
    "elapsed": 27996.284,
    "template_count": 1
  },
  {
    "org_id": 7,
    "org_name": "Scaled Deployment",
    "template_id": 94,
    "template_name": "template_Sarcastic_Midnight_151247",
    "elapsed": 35767.56,
    "template_count": 1
  },
  {
    "org_id": 3,
    "org_name": "Research and Development",
    "template_id": 83,
    "template_name": "template_Tiny_Step_194247",
    "elapsed": 205.41,
    "template_count": 1
  },
  {
    "org_id": 3,
    "org_name": "Research and Development",
    "template_id": 96,
    "template_name": "template_Starry_Independence_191747",
    "elapsed": 748.271,
    "template_count": 1
  },
  {
    "org_id": 6,
    "org_name": "Sandbox Testing",
    "template_id": 20,
    "template_name": "template_Potable_Swimming_103164",
    "elapsed": 94.31,
    "template_count": 1
  },
  {
    "org_id": 4,
    "org_name": "Engineering",
    "template_id": 101,
    "template_name": "template_Happy-go-lucky_Picture_243706",
    "elapsed": 2020.569,
    "template_count": 1
  },
  {
    "org_id": 2,
    "org_name": "Web apps",
    "template_id": 71,
    "template_name": "template_Stained_Equal_3",
    "elapsed": 679.593,
    "template_count": 1
  },
  {
    "org_id": 14,
    "org_name": "Building Blocks",
    "template_id": 116,
    "template_name": "template_Next_Type_103450",
    "elapsed": 446.399,
    "template_count": 1
  },
  {
    "org_id": 10,
    "org_name": "IT",
    "template_id": 21,
    "template_name": "template_Vast_Establishment_160309",
    "elapsed": 7.903,
    "template_count": 1
  },
  {
    "org_id": 11,
    "org_name": "Internal IT",
    "template_id": 6,
    "template_name": "template_Infatuated_Career_183021",
    "elapsed": 11.125,
    "template_count": 1
  },
  {
    "org_id": 1,
    "org_name": "AWS instances",
    "template_id": 85,
    "template_name": "template_Sneaky_Stuff_51",
    "elapsed": 102.195,
    "template_count": 1
  },
  {
    "org_id": 8,
    "org_name": "Cloud",
    "template_id": 22,
    "template_name": "template_Verifiable_Record_188",
    "elapsed": 112.058,
    "template_count": 1
  }
];

    const orgArray = records.map(function (el) { return el.org_name; });
    const templateCountArray = records.map(function (el) { return el.template_count; });
    const elapsedArray = records.map(function (el) { return el.elapsed; });

    this.state = {
        "data": [
            {
              "customdata": records, //customization
              "hovertemplate": "Organization: %{customdata.org_name}<br>Template: %{customdata.template_name}<br>Elapsed: %{customdata.elapsed}", //customization
              "marker": {
                "color": elapsedArray, //customization
                "coloraxis": "coloraxis",
              },
              "name": "",
              x: orgArray, //customization
              y: templateCountArray, //customization
              "type": "bar"
            }
        ],
        "layout": {
            "template": {
              "data": {
                "bar": [
                  {
                    "error_x": {
                      "color": "#2a3f5f"
                    },
                    "error_y": {
                      "color": "#2a3f5f"
                    },
                    "marker": {
                      "line": {
                        "color": "white",
                        "width": 0.5
                      },
                      "pattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                      }
                    },
                    "type": "bar"
                  }
                ],
              },
              "layout": {
                "hoverlabel": {
                  "align": "left"
                },
                "hovermode": "closest",
                "paper_bgcolor": "white",
                "plot_bgcolor": "white",
                "xaxis": {
                  "automargin": true,
                  "gridcolor": "#D2D2D2",
                  "linecolor": "#D2D2D2",
                  "title": {
                    "standoff": 15
                  },
                  "zerolinecolor": "#D2D2D2",
                  "zerolinewidth": 2
                },
                "yaxis": {
                  "automargin": true,
                  "gridcolor": "#D2D2D2",
                  "linecolor": "#D2D2D2",
                  "title": {
                    "standoff": 15
                  },
                  "zerolinecolor": "#D2D2D2",
                  "zerolinewidth": 2
                }
              }
            },
            "xaxis": {
              "tickangle": -45,
              "title": {
                "text": "Organization", //customization
                "font": {
                  "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                  "size": 15,
                  "color": "black"
                }
              }
            },
            "yaxis": {
              "anchor": "x",
              "domain": [
                0.0,
                1.0
              ],
              "title": {
                "text": "Template count", //customization
                "font": {
                  "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                  "size": 15,
                  "color": "black"
                }
              },
              "color": "#4f5255"
            },
            "coloraxis": {
              "colorbar": {
                "title": {
                  "text": "Elapsed",
                  "font": {
                    "color": "#4f5255",
                    "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                    "size": 15
                  }
                },
                "tickfont": {
                  "color": "#4f5255",
                  "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                  "size": 15
                }
              },
              "colorscale": [
                [
                  0.0,
                  "#0066CC"
                ],
                [
                  0.2,
                  "#004B95"
                ],
                [
                  0.4,
                  "#5752D1"
                ],
                [
                  0.6,
                  "#3C3D99"
                ],
                [
                  0.8,
                  "#C9190B"
                ],
                [
                  1.0,
                  "#A30000"
                ]
              ]
            },
            "legend": {
              "title": {
                "font": {
                  "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                  "color": "#4f5255"
                }
              },
              "font": {
                "size": 10
              }
            },
            "margin": {
              "t": 60
            },
            "font": {
              "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
              "size": 14,
              "color": "#4f5255"
            },
            "title": {
              "font": {
                "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
                "color": "#4f5255",
                "size": 15
              }
            },
            "hoverlabel": {
              "font": {
                "size": 14,
                "family": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif"
              },
              "bgcolor": "#151515"
            },
            "height": 600,
            "width": 1400,
            "style": {cursor: "auto"}
        }
    }

    this.state.config = {'modeBarButtonsToRemove': ['zoom'], displaylogo: false}
  }


  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
        onHover={data => {
          this.dragLayer = document.getElementsByClassName("nsewdrag")[0];
          this.dragLayer.style.cursor = "auto";
        }}
        onMove={data => {
          this.dragLayer = document.getElementsByClassName("nsewdrag")[0];
          this.dragLayer.style.cursor = "auto";
        }}
      />
    );
  }
}

export default App;
