import React from 'react';
import axios from 'axios';
import { AppContext } from '../Context/AppContext.js';
import { ButtonPanelDiv, MovementButton, MineButton, PrayButton, NameChangeInput, NameChangeButton } from '../StyledComponents';

require('dotenv').config()

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            northAvailable: true,
            southAvailable: true,
            westAvailable: true,
            eastAvailable: true,
            disableAllButtons: false,
            disableMovementButtons: false,
            disableMineButton: false,
            disablePrayButton: false,
            disableNameChangeButton: false,
            lastProof: {},
            newProof: null,
        }
    }

    componentDidMount() {
        this.UpdateRoomData();
    }

    componentDidUpdate() {
        this.UpdateRoomData();
    }

    MoveNorth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveNorth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }
    
    FlyNorth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyNorth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveSouth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveSouth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlySouth = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlySouth()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveWest = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveWest()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlyWest = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyWest()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MoveEast = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.MoveEast()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    FlyEast = () => {
        this.setState({
            disableAllButtons: true,
            disableMovementButtons: true
        })
        this.context.FlyEast()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMovementButtons: false
            })
        }, this.context.state.cooldown +500)
    }

    MineCoin = () => {
        this.MineOneCoin();
        // this.setState({
        //     disableAllButtons: true,
        //     disableMineButton: true
        // })
        // setTimeout(() => {
        //     this.GetLastProof();
        // }, this.context.state.cooldown)
        // setTimeout(() => {
        //     this.ProofOfWork(this.state.lastProof.proof, this.state.lastProof.difficulty)
        // }, this.context.state.cooldown + 2000)
    //     // setTimeout(() => {
    //         this.context.MineOneCoin();
    //     // }, this.state.cooldown + 1500)
        // setTimeout(() => {
        //     this.setState({
        //         disableAllButtons: false,
        //         disableMineButton: false
        //     })
        // }, 15000) // Disables button for 15 seconds
    }
    
    GetLastProof =  () => {
        setTimeout(() => {
            const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/';
            const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
            const options = {
                headers: {
                    Authorization: `Token ${key}`
                }
            };
            axios
                .get(endpoint, options)
                .then(res => {
                    this.setState({
                        lastProof: res.data,
                        cooldown: (res.data.cooldown * 1050)
                    });
                })
                .catch(err => {
                    console.log('error', err);
                });
        }, this.state.cooldown);
    }

    ProofOfWork = (last_proof, difficulty) => {
        let proof = last_proof
        let count = 0
        while ((this.ValidProof(last_proof, proof, difficulty)) === false) {
            if (count === 1000000) {
                return false
            }
            else {
                proof += 1
                console.log(count)
                count += 1
            }
        }
        console.log(this.ValidProof(last_proof, proof, difficulty))
        proof += 1
        console.log(this.ValidProof(last_proof, proof, difficulty))
        console.log(`Proof found: ${proof}`)
        return proof
    }

    ValidProof = (last_hash, proof, difficulty) => {
        // console.log('Valid Proof')

        let guess = (`${last_hash}${proof}`)
        let guessHash = this.sha256(guess)
        // console.log(guessHash)

        let beg = guessHash.substring(0, difficulty)
        // console.log(beg)
        let comp = "".padStart(difficulty, '0');
        // console.log(comp)
        if (beg === comp) {
            console.log(`${guessHash} ${beg} ${comp}`)
            return true
        }
        else {
            return false
        }
    }

    MineOneCoin = () => {
        let canChangeButton = true;
        console.log(this.state.lastProof) // Should return {}
        this.setState({
            disableAllButtons: true,
            disableMineButton: true
        })
        setTimeout(() => {
            this.GetLastProof();
        }, this.context.state.cooldown)

        setTimeout(() => {
            console.log(this.state.lastProof)
            this.ProofOfWork(this.state.lastProof.proof, this.state.lastProof.difficulty)
        }, this.context.state.cooldown + 1500)

        // setTimeout(() => {
        //     this.ProofOfWork(this.state.lastProof.proof, this.state.lastProof.difficulty)
        // }, this.context.state.cooldown + 2000)
    //     // setTimeout(() => {
    //         this.context.MineOneCoin();
    //     // }, this.state.cooldown + 1500)
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disableMineButton: false
            })
        }, 15000) // Disables button for 15 seconds

        // this.GetLastProof();
        // Mine Coin:
        // const endpoint = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/mine/';
        // const key = process.env.REACT_APP_KEY || '314ec772ed9d2974590b9b02a56b022a47c1815c';
        // const options = {
        //     headers: {
        //         Authorization: `Token ${key}`,
        //         'Content-Type': 'application/json'
        //     }
        // }
        // const body = {
        //     // 'proof': `${newProof}`, //'{"proof":new_proof}' 
        // }
        // axios
        // .post(endpoint, body, options)
        // .then( res => {
        //     console.log(res.data)
        //     this.setState({
        //         cooldown: (res.data.cooldown * 1000)
        //     });
        // })
        // .catch(err => {
        //     console.log('error', err);
        // });
    }
    Pray = () => {
        this.setState({
            disableAllButtons: true,
            disablePrayButton: true
        })
        this.context.PrayAtAltar()
        setTimeout(() => {
            this.setState({
                disableAllButtons: false,
                disablePrayButton: false
            })
        }, 50000) // Disables pray button for 50 seconds
    }

    NameChange = event => {
        event.preventDefault();
        if (this.context.state.newName !== '') {
            this.setState({
                disableAllButtons: true,
                disableNameChangeButton: true
            })
            this.context.RenameCharacter()
            setTimeout(() => {
                this.context.GetUserData();
            }, 15000)
            setTimeout(() => {
                this.setState({
                    disableAllButtons: false,
                    disableNameChangeButton: false,
                })
            }, 25000) // Disables name change button for 14 seconds

        }
    }

    UpdateRoomData = () => {
        if (this.context.state.currentRoomData.exits) {
            if (this.context.state.currentRoomData.exits.includes("n") && this.state.northAvailable === false) {
                this.setState({
                    northAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("n") === false && this.state.northAvailable === true) {
                this.setState({
                    northAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("s") && this.state.southAvailable === false) {
                this.setState({
                    southAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("s") === false && this.state.southAvailable === true) {
                this.setState({
                    southAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("w") && this.state.westAvailable === false) {
                this.setState({
                    westAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("w") === false && this.state.westAvailable === true) {
                this.setState({
                    westAvailable: false
                })
            }

            if (this.context.state.currentRoomData.exits.includes("e") && this.state.eastAvailable === false) {
                this.setState({
                    eastAvailable: true
                })
            }

            if (this.context.state.currentRoomData.exits.includes("e") === false && this.state.eastAvailable === true) {
                this.setState({
                    eastAvailable: false
                })
            }
        }
    }

/* sha256 function is from https://geraintluff.github.io/sha256/
    This is not my work and I would like to thank them for this code */


    sha256 = function sha256(ascii) {
        function rightRotate(value, amount) {
            return (value>>>amount) | (value<<(32 - amount));
        };
        
        var mathPow = Math.pow;
        var maxWord = mathPow(2, 32);
        var lengthProperty = 'length'
        var i, j; // Used as a counter across the whole file
        var result = ''
    
        var words = [];
        var asciiBitLength = ascii[lengthProperty]*8;
        
        //* caching results is optional - remove/add slash from front of this line to toggle
        // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
        // (we actually calculate the first 64, but extra values are just ignored)
        var hash = sha256.h = sha256.h || [];
        // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
        var k = sha256.k = sha256.k || [];
        var primeCounter = k[lengthProperty];
        /*/
        var hash = [], k = [];
        var primeCounter = 0;
        //*/
    
        var isComposite = {};
        for (var candidate = 2; primeCounter < 64; candidate++) {
            if (!isComposite[candidate]) {
                for (i = 0; i < 313; i += candidate) {
                    isComposite[i] = candidate;
                }
                hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
                k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
            }
        }
        
        ascii += '\x80' // Append Ƈ' bit (plus zero padding)
        while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
        for (i = 0; i < ascii[lengthProperty]; i++) {
            j = ascii.charCodeAt(i);
            if (j>>8) return; // ASCII check: only accept characters in range 0-255
            words[i>>2] |= j << ((3 - i)%4)*8;
        }
        words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
        words[words[lengthProperty]] = (asciiBitLength)
        
        // process each chunk
        for (j = 0; j < words[lengthProperty];) {
            var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
            var oldHash = hash;
            // This is now the undefinedworking hash", often labelled as variables a...g
            // (we have to truncate as well, otherwise extra entries at the end accumulate
            hash = hash.slice(0, 8);
            
            for (i = 0; i < 64; i++) {
                // var i2 = i + j;
                // Expand the message into 64 words
                // Used below if 
                var w15 = w[i - 15], w2 = w[i - 2];
    
                // Iterate
                var a = hash[0], e = hash[4];
                var temp1 = hash[7]
                    + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                    + ((e&hash[5])^((~e)&hash[6])) // ch
                    + k[i]
                    // Expand the message schedule if needed
                    + (w[i] = (i < 16) ? w[i] : (
                            w[i - 16]
                            + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                            + w[i - 7]
                            + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                        )|0
                    );
                // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
                var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                    + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
                
                hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
                hash[4] = (hash[4] + temp1)|0;
            }
            
            for (i = 0; i < 8; i++) {
                hash[i] = (hash[i] + oldHash[i])|0;
            }
        }
        
        for (i = 0; i < 8; i++) {
            for (j = 3; j + 1; j--) {
                var b = (hash[i]>>(j*8))&255;
                result += ((b < 16) ? 0 : '') + b.toString(16);
            }
        }
        return result;
    }
    
    render() {
        // If context.state.currentRoomData has been grabbed.
        if (this.context.state.currentRoomData) {
            // If you are in the Mine - Room 250
            if(this.context.state.flying === 'activated') {
                if (this.context.state.currentRoomData.room_id === 250) {
                    // render movement buttons plus a mine button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <MineButton onClick={this.MineCoin} disabled={this.state.disableMineButton === true || this.state.disableAllButtons === true}>Mine Coin</MineButton>
                        </ButtonPanelDiv>
                    );
                }
                // if you are at the Pirate Ry's Name Change shop - Room 467
                if (this.context.state.currentRoomData.room_id === 467) {
                    // render movement buttons plus a name change button and a name change input field
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <NameChangeInput onChange={this.context.InputHandler} placeholder='Enter your new name here' />
                            <NameChangeButton onClick={this.NameChange} disabled={this.state.disableNameChangeButton === true || this.state.disableAllButtons === true}>Change Name</NameChangeButton>
                        </ButtonPanelDiv>
                    );
                }
                // if you are at a shrine - Rooms 461, 22, 499
                if (this.context.state.currentRoomData.room_id === 22 || this.context.state.currentRoomData.room_id === 461 || this.context.state.currentRoomData.room_id === 499) {
                    // render movement buttons plus Pray button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <PrayButton onClick={this.Pray} disabled={this.state.disablePrayButton === true || this.state.disableAllButtons === true}>Pray</PrayButton>
                        </ButtonPanelDiv>
                    );
                }

                // Else if just a regular node
                else {
                    // render movement buttons
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.FlyNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.FlySouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.FlyWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.FlyEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                        </ButtonPanelDiv>
                    );
                }
            }
            else {
                if (this.context.state.currentRoomData.room_id === 250) {
                    // render movement buttons plus a mine button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <MineButton onClick={this.MineCoin} disabled={this.state.disableMineButton === true || this.state.disableAllButtons === true}>Mine Coin</MineButton>
                        </ButtonPanelDiv>
                    );
                }
                // Else if you are at the Pirate Ry's Name Change shop - Room 467
                if (this.context.state.currentRoomData.room_id === 467) {
                    // render movement buttons plus a name change button and a name change input field
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <NameChangeInput />
                            <NameChangeButton onClick={this.NameChange} disabled={this.state.disableNameChangeButton === true || this.state.disableAllButtons === true}>Change Name</NameChangeButton>
                        </ButtonPanelDiv>
                    );
                }
                // Else if you are at a shrine - Rooms 461, 22, 499
                if (this.context.state.currentRoomData.room_id === 22 || this.context.state.currentRoomData.room_id === 461 || this.context.state.currentRoomData.room_id === 499) {
                    // render movement buttons plus Pray button
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                            <PrayButton onClick={this.Pray} disabled={this.state.disablePrayButton === true || this.state.disableAllButtons === true}>Pray</PrayButton>
                        </ButtonPanelDiv>
                    );
                }

                // Else if just a regular node
                else {
                    // render movement buttons
                    return (
                        <ButtonPanelDiv>
                            <MovementButton onClick={this.MoveNorth} disabled={this.state.northAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move North</MovementButton>
                            <MovementButton onClick={this.MoveSouth} disabled={this.state.southAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move South</MovementButton>
                            <MovementButton onClick={this.MoveWest} disabled={this.state.westAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move West</MovementButton>
                            <MovementButton onClick={this.MoveEast} disabled={this.state.eastAvailable === false || this.state.disableMovementButtons === true || this.state.disableAllButtons === true}>Move East</MovementButton>
                        </ButtonPanelDiv>
                    );
                }
            }
        }
        // If context hasn't been set yet return null
        else {
            return null
        }
    }
}

ButtonPanel.contextType = AppContext;

export default ButtonPanel;
