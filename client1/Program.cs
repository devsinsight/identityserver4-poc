﻿using IdentityModel.Client;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace client1
{
    class Program
    {
        private static async Task Main()
        {
            // discover endpoints from metadata
            var client = new HttpClient();

            var disco = await client.GetDiscoveryDocumentAsync("http://localhost:5000");
            if (disco.IsError)
            {
                Console.WriteLine(disco.Error);
                return;
            }

            // request token
            var tokenResponse = await client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
            {
                Address = disco.TokenEndpoint,
                ClientId = "c2c",
                ClientSecret = "secret",
                Scope = "resource2"
            });
            
            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }

            Console.WriteLine(tokenResponse.Json);
            Console.WriteLine("\n\n");

            // call api
            var apiClient = new HttpClient();
            apiClient.SetBearerToken(tokenResponse.AccessToken);

            //var response = await apiClient.GetAsync("http://localhost:5003/Identity");
            var response = await apiClient.GetAsync("http://localhost:8080/Identity"); //java endpoint
            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine(response.StatusCode);
            }
            else
            {
                var content = await response.Content.ReadAsStringAsync();
                Console.WriteLine(content); //java
                //Console.WriteLine(JArray.Parse(content));
            }
        }
    }
}
