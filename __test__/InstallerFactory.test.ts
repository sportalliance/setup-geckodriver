import { OS, Arch } from "../src/platform";
import {
  LinuxInstaller,
  MacOSInstaller,
  WindowsInstaller,
} from "../src/Installer";
import InstallerFactory from "../src/InstallerFactory";

describe("InstallerFactory", () => {
  describe.each([
    [OS.LINUX, LinuxInstaller],
    [OS.MACOS, MacOSInstaller],
    [OS.WINDOWS, WindowsInstaller],
  ])("for platform %s", (os, expected) => {
    test(`returns ${String(expected.name)}`, () => {
      const sut = new InstallerFactory();
      expect(sut.create({ os, arch: Arch.AMD64 })).toBeInstanceOf(expected);
    });
  });
});
