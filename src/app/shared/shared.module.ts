import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr'
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
	bgsColor: '#f05a27',
	bgsOpacity: 1,
	bgsPosition: 'bottom-right',
	bgsSize: 40,
	bgsType: 'double-bounce',
	blur: 1,
	delay: 0,
	fgsColor: '#f05a27',
	fgsPosition: 'center-center',
	fgsSize: 50,
	fgsType: 'fading-circle',
	masterLoaderId: 'master',
	overlayBorderRadius: '0',
	overlayColor: 'rgba(255, 255, 255, 0.7)',
	pbColor: 'red',
	pbDirection: 'ltr',
	pbThickness: 4,
	hasProgressBar: true,
	maxTime: -1,
	minTime: 500
};


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
		ToastrModule.forRoot({
			positionClass: 'toast-top-right'
		}),
		FlexLayoutModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatExpansionModule,
		MatAccordion,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
		NgSelectModule
	],
	exports: [
		CommonModule,
		RouterModule,
		NgxUiLoaderModule,
		ToastrModule,
		FlexLayoutModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatExpansionModule,
		MatIconModule,
		MatAccordion,
		MatDialogModule,
		MatButtonModule,
		NgSelectModule
	],
	providers: []
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<any> {
		return {
			ngModule: SharedModule,
			providers: [

			]
		}
	}

}
