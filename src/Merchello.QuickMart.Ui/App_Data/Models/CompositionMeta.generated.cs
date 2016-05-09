//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.2.93
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	// Mixin content Type 1062 with alias "compositionMeta"
	/// <summary>Composition - Meta</summary>
	public partial interface ICompositionMeta : IPublishedContent
	{
		/// <summary>Meta Description</summary>
		string MetaDescription { get; }

		/// <summary>Page Title</summary>
		string PageTitle { get; }
	}

	/// <summary>Composition - Meta</summary>
	[PublishedContentModel("compositionMeta")]
	public partial class CompositionMeta : PublishedContentModel, ICompositionMeta
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "compositionMeta";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public CompositionMeta(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<CompositionMeta, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Meta Description: The META description content
		///</summary>
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription
		{
			get { return GetMetaDescription(this); }
		}

		/// <summary>Static getter for Meta Description</summary>
		public static string GetMetaDescription(ICompositionMeta that) { return that.GetPropertyValue<string>("metaDescription"); }

		///<summary>
		/// Page Title: The HTML Page Title
		///</summary>
		[ImplementPropertyType("pageTitle")]
		public string PageTitle
		{
			get { return GetPageTitle(this); }
		}

		/// <summary>Static getter for Page Title</summary>
		public static string GetPageTitle(ICompositionMeta that) { return that.GetPropertyValue<string>("pageTitle"); }
	}
}
