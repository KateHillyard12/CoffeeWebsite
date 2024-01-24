(() => {
    const Filters = (props) => {

        let updatePlace = (clickEvent) => {
            props.updatePlaceState({
                where: clickEvent.target.value,
            });
        }
        return (
            <React.Fragment>
                <p><b>Filter your data here:</b></p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Where the coffee was made:</b>

                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updatePlace}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='Starbucks'>Starbucks</option>
                                <option value='Homemade'>Homemade</option>
                                <option value='Dutch Bros'>Dutch Bros</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


    const DataTable = (props) => {
        return (<div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Coffee</th>
                        <th>Where</th>
                        <th>Why</th>
                        <th>Type</th>
                        <th>Time</th>
                    </tr>
                    {props.dataToDisplay.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.coffee}</td>
                                <td>{row.where}</td>
                                <td>{row.why}</td>
                                <td>{row.type}</td>
                                <td>{row.time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        );
    };

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.orginalData = props.orginalData;

            this.state = {
                coffee: "",
                where: "",
                why: "",
                type: "",
                time: "",
            };

            this.updatePlaceState = this.updatePlaceState.bind(this);
        }

        updatePlaceState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.orginalData;


            if (this.state.where !== '') {
                filteredData = filteredData.filter(
                    (row) => row.where === this.state.where
                );
            }


            return (
                <React.Fragment>
                    <Filters
                        where={this.state.where}
                        updatePlaceState={this.updatePlaceState} />

                    <hr />

                    <DataTable dataToDisplay={filteredData} />
                </React.Fragment>
            );
        }
    }

    const coffeeData = [
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "Caffine",
            "type": "Espresso",
            "time": "10:00:00 AM",
        },
        {
            "coffee": "Occasionally",
            "where": "Starbucks",
            "why": "Taste",
            "type": "Cold brew",
            "time": "8:00:00 AM",
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "Taste, hot drink, caffine",
            "type": "Latte",
            "time": "9:00:00 AM",
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "Homemade, For caffine, Simple for a hot drink",
            "type": "",
            "time": ""
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Cold brew",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "Homemade, For taste, For caffine, Espresso",
            "type": "8:00:00 AM",
            "time": "2"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "White chocolate mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "other",
            "why": "For taste, Simple for a hot drink",
            "type": "Decaf",
            "time": "6:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Macchiato",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "other",
            "why": "For taste",
            "type": "Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine, Simple for a hot drink",
            "type": "Normal with cream",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Cold brew",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Latte",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine, Simple for a hot drink",
            "type": "Regular latte or simple coffee with creamer",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Breve",
            "time": "10:15:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Iced Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Cold brew",
            "time": "12:30:00 PM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For caffine",
            "type": "A chai",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Chai tea latte",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Regular coffee if home, toffee nut latte if from a shop",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Iced vanilla cold brew",
            "time": "5:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Caramel frappe or caramel macchiato",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Iced vanilla caramel",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Iced vanilla latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "other",
            "why": "For taste, Simple for a hot drink",
            "type": "Carmel macchiato",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Not a fan",
            "where": "",
            "why": "",
            "type": "",
            "time": ""
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Ice caramel macchiato",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Drip coffee",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "For caffine, Simple for a hot drink",
            "type": "Either a breve, or a rebel from dutch",
            "time": "1:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine, Simple for a hot drink",
            "type": "Espresso",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "other",
            "why": "Simple for a hot drink, I don't have a reason",
            "type": "Nothing theyre disgusting but maybe a Frappuccino (does that have coffee I dont actually know)",
            "time": "12:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste",
            "type": "Americano or latte",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Cold brew",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine, Simple for a hot drink",
            "type": "Macchiato",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Straight black",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Americano",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, Simple for a hot drink",
            "type": "Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For caffine",
            "type": "Carmel latte w/ oat milk",
            "time": "1:30:00 PM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Black",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "",
            "why": "",
            "type": "",
            "time": ""
        },
        {
            "coffee": "Not a fan",
            "where": "Starbucks",
            "why": "I don't have a reason",
            "type": "I usually get my wonderful girlfriend coffee. She would drink a americano witn cold foam, but its pumpkin spice season now.",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "I don't have a reason",
            "type": "Latte",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Dirty chai",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Mocha",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For caffine",
            "type": "Latte",
            "time": "6:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Cold brew",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "Dutch Bros",
            "why": "Simple for a hot drink",
            "type": "White chocolate mocha coffee",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Medium iced Americano made with a domino shot, sf caramel, sf hazelnut, 2 oz kick me and 2 oz oat milk",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Vanilla Sweet Cream Cold Brew",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while",
            "where": "other",
            "why": "For taste, For caffine",
            "type": "Iced latte",
            "time": "10:30:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Drip Coffee",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": null,
            "time": "7:30:00 AM"
        },

        {
            "coffee": "Yes",
            "where": "Starbucks",
            "why": "I don't have a reason",
            "type": "Latte",
            "time": "3:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "12:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Homemade",
            "why": "For taste",
            "type": "Latte",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine, Simple for a hot drink, I don't have a reason",
            "type": "Macchiato",



            "time": "3:00:00 PM"
        },
        {
            "coffee": "Not a fan",
            "where": "Dutch Bros",
            "why": "For caffine",
            "type": null,
            "time": null
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Chai Tea with two shots of Espresso",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "other",
            "why": "I don't have a reason",
            "type": null,
            "time": null
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Lattee if I want something sweet, Drip coffee if I just want coffee",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Black",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine, Simple for a hot drink",
            "type": "Raspberry Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Latte",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Cold Brew",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "other",
            "why": "For caffine",
            "type": "Latte!!",
            "time": "5:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Black plain coffee or freeze from Dutch Bros",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Iced Vanilla Latte",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Mocha",
            "time": "9:30:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Ice Latte",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Cream Cold Brew",
            "time": "9:30:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, Simple for a hot drink",
            "type": "Drip Coffee",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "other",
            "why": "For taste",
            "type": "Latte",
            "time": "1:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Iced Mocha",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste",
            "type": "Espresso",
            "time": "5:15:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Caramelizer",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Americano",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Usually Drip Coffee with cream or a Latte (I use a Nespresso)",
            "time": "8:03:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For caffine",
            "type": "Brewed Coffee with Creamer",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "other",
            "why": "For taste, For caffine",
            "type": "Just Regular",
            "time": "9:30:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Iced Latte or Macchiato",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste",
            "type": "Iced Coffee",
            "time": "6:30:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Mochas",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "I like to mix up my orders and try new things",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For caffine",
            "type": "Drip",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Latte",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For caffine",
            "type": "Drip Coffee and Creamer",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Iced Latte with Syrup (Vanilla, Pumpkin Spice, etc)",
            "time": "3:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Dutch Bros",
            "why": "Simple for a hot drink",
            "type": null,
            "time": null
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "other",
            "why": "For caffine",
            "type": "A Vanilla Oat Milk Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Mocha Frapp",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Black Coffee",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "other",
            "why": "For taste",
            "type": "Vanilla Lattee",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Homemade",
            "why": "Simple for a hot drink",
            "type": "Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "Starbucks",
            "why": "For caffine",
            "type": "Tiramisu",
            "time": "7:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, Simple for a hot drink",
            "type": "Latte",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Iced Caramel Machiatto with Extra Caramel",
            "time": null
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Iced Mocha",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, Simple for a hot drink",
            "type": "Dirty Chai or a Caramel Latte",
            "time": null
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "other",
            "why": "For taste, For caffine",
            "type": "Lotus type drink",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Dutch Bros",
            "why": "For taste, For caffine",
            "type": "Caramel Ice Coffee",
            "time": "11:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffine",
            "type": "Mocha / Iced Mocha",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Maybe every oncec and a while.",
            "where": "Starbucks",
            "why": "For taste, For caffine",
            "type": "Mocha, Pumpkin Spice Latte",
            "time": "9:00:00 AM"
        },

        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Pumpkin Spice Latte with Pumpkin Cold Foam, Vanilla or Coconut Cold Brew with Vanilla Cold Foam",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine",
            "type": "Iced Honey Oatmilk Latte",
            "time": "11:30:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste",
            "type": "Cold Brew",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste",
            "type": "Iced Coffee Latte"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste, For caffeine",
            "type": "Anything thats sweet",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Dutch Bros",
            "why": "For taste, For caffeine",
            "type": "Breve (Golden Eagle from DB)",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste, For caffeine",
            "type": "Brown sugar oat milk shaken espresso with light ice",
            "time": "2:30:00 PM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Dutch Bros",
            "why": "For caffeine",
            "type": "Chai tea with 1 shot of espresso and 1 cold brew with almond milk",
            "time": "6:45:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine",
            "type": "Folgers",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "other",
            "why": "For taste, Simple for a hot drink",
            "type": "Cappuccino",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine, Simple for a hot drink",
            "type": "Drip coffee with coffee creamer",
            "time": "8:30:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Caramel latte",
            "time": "10:30:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Iced coffee with almond milk",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste, For caffeine, Simple for a hot drink",
            "type": "Latte",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine",
            "type": "Black coffee",
            "time": "7:00:00 AM"
        },
        {
            "coffee": "Not a fan",
            "where": "Starbucks",
            "why": "Simple for a hot drink",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Dutch Bros",
            "why": "For taste, For caffeine, Simple for a hot drink",
            "type": "Mocha",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste, For caffeine",
            "type": "Latte or Cold Brew",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Starbucks",
            "why": "For caffeine",
            "type": "Caramel macchiato",
            "time": "8:30:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine",
            "type": "Just drip coffee at home",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Vanilla latte",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "other",
            "why": "For taste, For caffeine, Simple for a hot drink",
            "type": "Drip or Americano (black)",
            "time": "9:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Dutch Bros",
            "why": "For taste, For caffeine",
            "type": "Some kind of cold brew",
            "time": "9:30:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Starbucks",
            "why": "For taste",
            "type": "Cold brew",
            "time": "2:00:00 PM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Dutch Bros",
            "why": "For taste, For caffeine",
            "type": "White coffee chai latte",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "Dutch Bros",
            "why": "For taste",
            "type": "Frappe",
            "time": "10:00:00 AM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "other",
            "why": "For caffeine",
            "type": "Latte",
            "time": "8:00:00 AM"
        },
        {
            "coffee": "Yes, almost every day",
            "where": "Homemade",
            "why": "For taste, For caffeine",
            "type": "Plain Iced coffee with vanilla creamer. From Dutch: an electric berry rebel",
            "time": "12:00:00 PM"
        },
        {
            "coffee": "Maybe every once in a while.",
            "where": "other",
            "why": "For taste",
            "type": "Iced oat milk caramel macchiato",
            "time": "1:00:00 PM"
        }






    ]



    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable orginalData={coffeeData} />);

})()



//pm2 serve C:\Users\Kate\Desktop\MobileNarrative 3000
//http://127.0.0.1:3000/MobileNarrative.html


