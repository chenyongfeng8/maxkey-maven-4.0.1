/*
 * Copyright [2022] [MaxKey of copyright http://www.maxkey.top]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';

import { GroupMembers } from '../entity/GroupMembers';
import { Message } from '../entity/Message';
import { PageResults } from '../entity/PageResults';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GroupMembersService extends BaseService<GroupMembers> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, '/access/groupmembers');
    this.server.urls.member = '/memberIn';
    this.server.urls.memberOut = '/memberNotIn';
  }

  noMember(params: NzSafeAny): Observable<Message<PageResults>> {
    return this.http.get<Message<PageResults>>(`${this.server.urls.base}/noMember`, {
      params: this.parseParams(params)
    });
  }

  addMember2Groups(body: any): Observable<Message<PageResults>> {
    return this.http.post<Message<PageResults>>(`${`${this.server.urls.base}/addMember2Groups`}`, body);
  }
}
