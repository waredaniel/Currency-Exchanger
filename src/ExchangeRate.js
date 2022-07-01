export default class ExchangeRate {
  static async getExchangeRate(suppliedCurrency, desiredCurrency, transactionAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${suppliedCurrency}/${desiredCurrency}/${transactionAmount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}