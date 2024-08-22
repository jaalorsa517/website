import { ConverterService } from "@/shared/services/converter";
import { describe, it, expect } from "vitest";

describe("ConverterService", () => {
  it("convertStringJ5 tag j5", () => {
    const converter = new ConverterService();
    const str =
      "<j5-blog></j5-blog";
    const response =
      "&lt;j5-blog></j5-blog>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag J5V", () => {
    const converter = new ConverterService();
    const str =
      "<J5V></J5V>";
    const response =
      "&lt;J5V>&lt;/J5V>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 new line", () => {
    const converter = new ConverterService();
    const str =
      "<p>Hello \n world</p>";
    const response =
      "<p>Hello \n world</p>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code></code>";
    const response =
      "<code></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag template into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><template></template></code>";
    const response =
      "<code>&lt;template>&lt;/template></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag slot into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><slot></slot></code>";
    const response =
      "<code>&lt;slot>&lt;/slot></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag p into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><p></p></code>";
    const response =
      "<code>&lt;p>&lt;/p></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag h into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><h></h></code>";
    const response =
      "<code>&lt;h>&lt;/h></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag div into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><div></div></code>";
    const response =
      "<code>&lt;div>&lt;/div></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag span into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><span></span></code>";
    const response =
      "<code>&lt;span>&lt;/span></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag i into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><i></i></code>";
    const response =
      "<code>&lt;i>&lt;/i></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag b into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><b></b></code>";
    const response =
      "<code>&lt;b>&lt;/b></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag a into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><a></a></code>";
    const response =
      "<code>&lt;a>&lt;/a></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag section into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><section></section></code>";
    const response =
      "<code>&lt;section>&lt;/section></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag button into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><button></button></code>";
    const response =
      "<code>&lt;button>&lt;/button></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag form into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><form></form></code>";
    const response =
      "<code>&lt;form>&lt;/form></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag ul into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><ul></ul></code>";
    const response =
      "<code>&lt;ul>&lt;/ul></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag ol into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><ol></ol></code>";
    const response =
      "<code>&lt;ol>&lt;/ol></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag li into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><li></li></code>";
    const response =
      "<code>&lt;li>&lt;/li></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag svg into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><svg></svg></code>";
    const response =
      "<code>&lt;svg>&lt;/svg></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag input into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><input></input></code>";
    const response =
      "<code>&lt;input>&lt;/input></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag img into tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><img></img></code>";
    const response =
      "<code>&lt;img>&lt;/img></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

});
