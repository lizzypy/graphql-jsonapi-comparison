require 'rails_helper'

RSpec.describe "students#index", type: :request do
  let(:params) { {} }

  subject(:make_request) do
    jsonapi_get "/api/v1/students", params: params
  end

  describe 'basic fetch' do
    let!(:student1) { create(:student) }
    let!(:student2) { create(:student) }

    it 'works' do
      expect(StudentResource).to receive(:all).and_call_original
      make_request
      expect(response.status).to eq(200), response.body
      expect(d.map(&:jsonapi_type).uniq).to match_array(['students'])
      expect(d.map(&:id)).to match_array([student1.id, student2.id])
    end
  end
end
