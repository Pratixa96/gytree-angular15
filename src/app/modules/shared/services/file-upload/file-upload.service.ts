import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../../../../core/services/token-storage/token-storage.service';
import { BaseService } from '../../../../core/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService extends BaseService {

  constructor(
    protected httpClient: HttpClient,
    protected tokenStorage: TokenStorageService
  ) {
    super(httpClient, tokenStorage)
  }

  uploadFile(payload: any) {
    const url = `${environment.apiUrls.baseUrl}v1/upload/uploadfiles`;
    return this.post(url, payload);
  }
}
