require 'rails_helper'

RSpec.describe "students#show", type: :request do
  let(:params) { {} }

  subject(:make_request) do
    jsonapi_get "/api/v1/students/#{student.id}", params: params
  end

  describe 'basic fetch' do
    let!(:student) { create(:student) }

    it 'works' do
      expect(StudentResource).to receive(:find).and_call_original
      make_request
      expect(response.status).to eq(200)
      expect(d.jsonapi_type).to eq('students')
      expect(d.id).to eq(student.id)
    end
  end
end
