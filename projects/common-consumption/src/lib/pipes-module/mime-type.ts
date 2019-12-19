import { Pipe, PipeTransform } from '@angular/core';
export class MimeTypeMasterData {
    public static readonly COLLECTION = 'application/vnd.ekstep.content-collection';
    public static readonly VIDEO = ['video/avi', 'video/mpeg', 'video/quicktime', 'video/3gpp', 'video/mpeg', 'video/mp4',
        'video/ogg', 'video/webm'];
    public static readonly AUDIO = ['audio/mp3', 'audio/mp4', 'audio/mpeg', 'audio/ogg', 'audio/webm', 'audio/x-wav', 'audio/wav'];
    public static readonly INTERACTION = ['application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.html-archive',
        'application/vnd.android.package-archive', 'application/vnd.ekstep.content-archive',
        'application/vnd.ekstep.plugin-archive', 'application/vnd.ekstep.h5p-archive'];
    public static readonly DOCS =  ['application/pdf', 'application/epub', 'application/msword'];
    public static readonly ALL = ['video/mp4', 'video/x-youtube', 'video/webm', 'application/pdf', 'application/epub',
        'application/pdf', 'application/epub', 'application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.h5p-archive',
        'application/vnd.ekstep.html-archive'
    ];
}
​
/*
  Contents are filtered based on given mimetype
*/
​
interface PipeArg {
    mimeType: string;
    children: PipeArg;
}

@Pipe({
  name: 'hasMimeType',
})
export class MimeTypePipe implements PipeTransform {
  transform(item: PipeArg, mimeTypes: string[] = ['all'], isTextbookTocPage: boolean = false): boolean {
      if (mimeTypes.indexOf('all') > -1) {
        if (item.mimeType !== MimeTypeMasterData.COLLECTION && !item.children) {
          return true;
        } else {
          return this.getFilteredItems(item.children, MimeTypeMasterData.ALL);
        }
      }
      if (item.mimeType !== MimeTypeMasterData.COLLECTION && !item.children) {
        return this.getFilteredItems([item], mimeTypes);
      }
      return this.getFilteredItems(item.children, mimeTypes);
  }
​
​
  getFilteredItems(contents, mimeTypes: string[]): boolean {
    return this.flattenDeep(contents)
      .some((c) => !!mimeTypes.find(m => m === c.mimeType));
  }
​
  private flattenDeep(contents) {
    return contents.reduce((acc, val) => {
      if (val.children) {
        // const newVal = { ...val };
        // delete newVal['children'];
        acc.push(val);
        return acc.concat(this.flattenDeep(val.children));
      } else {
        return acc.concat(val);
      }
    }, []);
  }
}