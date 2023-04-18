


export const applicationRequestBody = (jobName: string) => {
  return "I am applying for a job as a " + jobName + ". I do not know how to fill the application I see a section called work history. Please give me instructions on how to fill out the work history. Provide response in spanish?"
}

export const constructApplicationSentence = (workTitle: string, workHistory: string )=>{
  return "I am applying to be a " + workTitle + ". Here is my work " + workHistory + ". Provide me with the content i should write on the application for the work history section. Do not provide any other information or context. Just the content that I should write. Respond in English."

}
