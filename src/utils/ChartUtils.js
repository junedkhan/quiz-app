
//This method process the data into the form chart takes the input
export const processChartData = (data) => {
    const updatedChartData = []
    for(let key in data) {
      if(key !== 'errors') {
        updatedChartData.push({ key, answers: data[key]});
      }
    }
    return updatedChartData;
}
