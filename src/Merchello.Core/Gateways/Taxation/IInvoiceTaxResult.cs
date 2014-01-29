﻿using Merchello.Core.Models;

namespace Merchello.Core.Gateways.Taxation
{
    /// <summary>
    /// Defines an invoice tax calculation.
    /// </summary>
    public interface IInvoiceTaxResult
    {
        /// <summary>
        /// The <see cref="ICountryTaxRate"/> used to obtain the quote
        /// </summary>
        ICountryTaxRate CountryTaxRate { get; }

        /// <summary>
        /// The calculated tax amount
        /// </summary>
        decimal TaxAmount { get; set; }

        /// <summary>
        /// An extended data collection to store any additional information returned by the Tax Provider.
        /// Ex. may include an itemization of Country, State, Local / Municipal taxes
        /// </summary>
        ExtendedDataCollection ExtendedData { get; }
    }
}