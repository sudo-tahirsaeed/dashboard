const jsonData = require('../src/Data/response.json');
const commonEvaluations = JSON.parse(jsonData.CommonEvaluations);
// console.log('comonEVAL:', commonEvaluations);
console.log('Greeting message points: ',commonEvaluations.greeting_message.obtained_points);
console.log('Active Listening points: ',commonEvaluations.active_listening.obtained_points);
console.log('Communication skill level points: ',commonEvaluations.communication_skill_level.obtained_points);
console.log('Proper probing points: ',commonEvaluations.proper_probing.obtained_points);
console.log('Responsibility points: ',commonEvaluations.responsibility.obtained_points);
console.log('Closing Message points: ',commonEvaluations.closing_message.obtained_points);


  console.log(commonEvaluations["greeting_message"].obtained_points);
  // Extract and print Summary
  console.log("Summary: ", jsonData.Summary);
  
  // Extract and print VoiceToneResults
  console.log("VoiceToneResults: ", jsonData.VoiceToneResults);
  Object.keys(jsonData.VoiceToneResults).forEach((part) => {
    console.log(`  ${part}:`, jsonData.VoiceToneResults[part]);
  });
  
  // Extract and print DetectedIssue
  console.log("DetectedIssue: ", jsonData.DetectedIssue);
  
  // Extract and print TroubleshootSteps
  console.log("TroubleshootSteps: ", jsonData.TroubleshootSteps);
  
  // Extract and print ResolutionTime
  console.log("ResolutionTime: ", jsonData.ResolutionTime);
  
  // Extract and print whispherData
//   console.log("whispherData: ", jsonData.whispherData);
console.log(` EnglishTranscription :`, jsonData.whispherData["EnglishTranscription"]);
console.log(` EnglishTranscriptionWithTimeStamps :`, jsonData.whispherData["EnglishTranscriptionWithTimeStamps"]);
console.log(` Urdutranscription :`, jsonData.whispherData["Urdutranscription"]);
console.log(` SilentSpots :`, jsonData.whispherData["SilentSpots"]);
console.log(` LongerSilentSpots :`, jsonData.whispherData["LongerSilentSpots"]);
console.log(` LongerSilentSpotsDuration :`, jsonData.whispherData["LongerSilentSpotsDuration"]);
console.log(` FileName :`, jsonData.whispherData["FileName"]);
console.log(` TotalDurationOriginal :`, jsonData.whispherData["TotalDurationOriginal"]);
