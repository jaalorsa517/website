import { ConverterService } from "@/shared/services/converter";
import { describe, it, expect } from "vitest";

describe("ConverterService", () => {
  it("convertStringJ5 tag j5", () => {
    const converter = new ConverterService();
    const str =
      "<j5-blog></j5-blog>";
    const response =
      "&lt;j5-blog></j5-blog>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });

  it("convertStringJ5 tag code", () => {
    const converter = new ConverterService();
    const str =
      "<code><p></p></code>";
    const response =
      "<code>&lt;p>&lt;/p></code>";
    const result = converter.convertStringJ5(str);
    expect(result).toEqual(response);
  });
});
