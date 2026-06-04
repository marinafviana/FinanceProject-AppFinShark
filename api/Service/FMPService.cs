using api.Interfaces;
using api.Models;
using Newtonsoft.Json;

namespace api.Service
{
    public class FMPService : IFMPService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;

        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        public async Task<Stock?> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync(
                    $"https://finnhub.io/api/v1/stock/profile2?symbol={symbol}&token={_config["FinnhubKey"]}"
                );

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var stockData = JsonConvert.DeserializeObject<FinnhubStock>(content);

                    if (stockData != null)
                    {
                        return new Stock
                        {
                            Symbol = stockData.Ticker,
                            CompanyName = stockData.Name,
                            Industry = stockData.FinnhubIndustry,
                            MarketCap = (long)stockData.MarketCapitalization,
                            Purchase = 0,
                            LastDiv = 0
                        };
                    }
                }

                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }

    public class FinnhubStock
    {
        public string Ticker { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string FinnhubIndustry { get; set; } = string.Empty;
        public decimal MarketCapitalization { get; set; }
    }
}