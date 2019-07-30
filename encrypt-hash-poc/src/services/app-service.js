class AppService {

  showErrorMessage (error = 'NO_INPUT_FILE') {
    
    if(error == 'NO_INPUT_FILE') {
      console.log('\n');
        console.log('Please run this program using the following format:');
        console.log('node hash-iterator.js full/path/for/your/input_file.txt\n');
        console.log('The input file has to contain a text with the following format:');
        console.log(' \"< ASCII encoded string >,< A number >\"\n');
    } else {
      console.log(`[Error] ${error}`);
    }
    
  };

}

module.exports = new AppService();