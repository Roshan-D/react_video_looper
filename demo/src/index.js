//import React, {Component} from 'react'
import React from 'react';
import {render} from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import VideoLooper from '../../src'
import { Editor } from './editor.js'
import { Choose } from './chooseVideo.js'
import useFormData from 'react-use-form-data'
import sample from '/Users/rohoswagger/Documents/macarthur bates/action words/blow.mp4';

export default function Demo() {

  const [formData, updateFormData, initialFormData, isInitialDataForPlaceholder] = useFormData({ 
    sampleVideo: sample,
    start: 0.0,
    end: 2.0,
    isEditorActive: false,
    isChooseActive: false,
    isDebugMode: true,
  }, true);
 
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Editor {...formData} updateFormData={updateFormData} initialFormData={isInitialDataForPlaceholder && initialFormData}></Editor>
      <VideoLooper source={formData.sampleVideo} start={Number(formData.start)} end={Number(formData.end)}/>
      <Choose {...formData} updateFormData={updateFormData} initialFormData={isInitialDataForPlaceholder && initialFormData}></Choose>
    </div>
  )
  
}

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    margin: 0
  }
`
render(<Demo/>, document.querySelector('#demo'))