using System.Security.Cryptography;
using System.Text;

namespace DotNetCoreFans.Common
{
    public class SecurityHelper
    {
        public static string Sha256Hash(string inputString)
        {
            if (string.IsNullOrWhiteSpace(inputString))
            {
                return string.Empty;
            }

            return CalculateSha256Hash(inputString);
        }

        private static string CalculateSha256Hash(string input)
        {
            // calculate SHA256 hash from input
            SHA256 sha256 = SHA256.Create();
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hash = sha256.ComputeHash(inputBytes);

            // convert byte array to hex string
            StringBuilder sb = new StringBuilder();
            foreach (byte t in hash)
            {
                sb.Append(t.ToString("X2"));
            }

            return sb.ToString();
        }
    }
}