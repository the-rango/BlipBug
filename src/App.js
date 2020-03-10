import React, {Component, Fragment, useState} from 'react';
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { useSpeechSynthesis } from "react-speech-kit";
import './App.css';

const Speech = (props) => {
  const [voiceIndex, setVoiceIndex] = useState(0);
  const {
    speak,
    cancel,
    speaking,
    supported,
    voices
  } = useSpeechSynthesis();

  return (
    <Fragment>
      <Button
        fullWidth
        disableElevation
        size='large'
        variant='contained'
        color='primary'
        onClick={() => speaking ? cancel() : speak({ text: props.text, voice: voices[voiceIndex] })}>
        {speaking ? "STOP" : "SPEAK"}
      </Button>

      <FormControl fullWidth>
        <InputLabel id="voice">Voice</InputLabel>
        <Select
          labelId="voice"
          id="voice-picker"
          value={voiceIndex}
          onChange={(event) => { setVoiceIndex(event.target.value); }}
        >
          {voices.map((option, index) => (
            <MenuItem key={option.voiceURI} value={index}>
              {`${option.lang} - ${option.name}`}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Pick a voice that fits you!</FormHelperText>
      </FormControl>

      {supported ? (
        <Fragment />
      ) : (
        <Typography variant="body1" style={{marginTop: 10}}>
          Not working? Your browser may not support speech synthesis!<br/>
          Please try this demo again on Chrome on your computer for best results!
        </Typography>
      )}
    </Fragment>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      thebleep: 'Hello',
    }
  }

  bop = (word) => {
    this.setState({thebleep: this.state.thebleep+' '+word});
  }

  beep = () => {
    const lastIndex = this.state.thebleep.lastIndexOf(" ");
    this.setState({thebleep: this.state.thebleep.substring(0, lastIndex)})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Typography variant='h5' style={{marginTop: 5}}>
            Welcome to BlipBugaTron 5000
          </Typography>
          <Typography variant='h1' style={{margin: 10}}>
            {this.state.thebleep}
          </Typography>

          <table>
            <tbody>
              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('sorry')}}>sorry</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('yes')}}>yes</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('no')}}>no</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='contained'
                    color='secondary'
                    onClick={()=>{this.beep()}}>Backspace</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('me')}}>me</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('Mom')}}>Mom</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('Dad')}}>Dad</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('teacher')}}>teacher</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('what')}}>what</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('now')}}>now</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('hot')}}>hot</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('penguins')}}>penguins</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('want')}}>want</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('have')}}>have</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('go')}}>go</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('know')}}>know</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('happy')}}>happy</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('angry')}}>angry</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('afraid')}}>afraid</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('disgusted')}}>disgusted</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('thank')}}>thank</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('you')}}>you</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('help')}}>help</Button>
                </td>
                <td>
                  <Button
                    fullWidth
                    disableElevation
                    size='large'
                    variant='outlined'
                    onClick={()=>{this.bop('please')}}>please</Button>
                </td>
              </tr>

              <tr>
                <td colspan='4'>
                  <Speech text={this.state.thebleep} />
                </td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
