// application-pipes.module.ts
// other imports
import { DefaultImagePipe } from '../default-image.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    DefaultImagePipe
  ],
  exports: [
    DefaultImagePipe
  ]
})
export class ApplicationPipesModule {}